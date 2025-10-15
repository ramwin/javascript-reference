import { createCluster, createClient } from "redis";

// 强制退出函数
function forceExit() {
    console.log("强制退出程序");
    process.kill(process.pid, 'SIGTERM');
}

// 全局错误处理
process.on('uncaughtException', (err) => {
    console.error('未捕获的异常:', err);
    console.error('错误类型:', err.constructor.name);
    console.error('错误消息:', err.message);
    
    if (err.message.includes('Socket closed') || 
        err.message.includes('ECONNREFUSED') ||
        err.constructor.name.includes('SocketClosedUnexpectedlyError')) {
        console.log('全局错误处理器检测到连接错误');
        forceExit();
    }
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
    if (reason && typeof reason === 'object' && 'message' in reason) {
        const err = reason as Error;
        console.error('Promise拒绝错误类型:', err.constructor.name);
        console.error('Promise拒绝错误消息:', err.message);
        
        if (err.message.includes('Socket closed') || 
            err.message.includes('ECONNREFUSED') ||
            err.constructor.name.includes('SocketClosedUnexpectedlyError')) {
            console.log('全局Promise拒绝处理器检测到连接错误');
            forceExit();
        }
    }
});

const cluster = createCluster({
    rootNodes: [
        {
            url: "redis://127.0.0.1:7000",
            socket: {
                reconnectStrategy: false,
                connectTimeout: 5000,
                lazyConnect: false
            }
        },
        {
            url: "redis://127.0.0.1:7001",
            socket: {
                reconnectStrategy: false,
                connectTimeout: 5000,
                lazyConnect: false
            }
        },
    ]
})

const redis = createClient({
    socket: {
        reconnectStrategy: false,
        connectTimeout: 5000
    }
})

var cluster_connect;

async function run(data) {
    try {
        console.log(new Date());
        console.log(await cluster_connect.get("foo"))
        await cluster_connect.rPush("list", "1");
        console.log("长度", await cluster_connect.lLen("list"))
    } catch (err) {
        console.error("run函数执行出错:", err);
        console.error("错误类型:", err.constructor.name);
        console.error("错误消息:", err.message);
        
        console.log("发生错误，强制退出程序");
        forceExit();
    }
}

async function main() {
    // 在连接之前设置事件监听器
    cluster.on('error', (err) => {
        console.error('Redis集群连接错误:', err);
        forceExit();
    });
    
    cluster.on('end', () => {
        console.log('Redis集群连接已断开');
        forceExit();
    });

    cluster.on("disconnect", () => {
        console.log('Redis集群连接已断开');
        forceExit();
    });
    
    redis.on('error', (err) => {
        console.error('Redis单机连接错误:', err);
        forceExit();
    });
    
    redis.on('end', () => {
        console.log('Redis单机连接已断开');
        forceExit();
    });

    cluster_connect = await cluster.connect();
    
    let data;
    const redis_client = await redis.connect();
    
    while (true) {
        try {
            data = await redis_client.BLPOP("task", 10)
            if (!data) {
                console.log("没有任务")
                continue;
            } else {
                console.log("有任务", data)
                await run(data);
            }
        } catch (err) {
            console.error("处理任务时出错:", err);
            console.error("错误类型:", err.constructor.name);
            console.error("错误消息:", err.message);
            
            console.log("主循环检测到错误，强制退出程序");
            forceExit();
        }
    }
}

main().catch(err => {
    console.log("有报错", err)
    console.log("结束")
    forceExit();
})
