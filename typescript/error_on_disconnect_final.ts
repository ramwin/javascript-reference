import { createCluster, createClient } from "redis";

// 全局退出标志
let shouldExit = false;

// 强制退出函数
function forceExit() {
    if (shouldExit) return; // 防止重复退出
    shouldExit = true;
    
    console.log("强制退出程序");
    
    // 多种退出方式
    try {
        process.exit(1);
    } catch (e) {
        try {
            process.kill(process.pid, 'SIGTERM');
        } catch (e2) {
            try {
                process.kill(process.pid, 'SIGKILL');
            } catch (e3) {
                console.log("所有退出方式都失败了");
            }
        }
    }
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

// 监听进程信号
process.on('SIGTERM', () => {
    console.log('收到SIGTERM信号，退出程序');
    forceExit();
});

process.on('SIGINT', () => {
    console.log('收到SIGINT信号，退出程序');
    forceExit();
});

const cluster = createCluster({
    rootNodes: [
        {
            url: "redis://127.0.0.1:7000",
            socket: {
                reconnectStrategy: false,
                connectTimeout: 100,
                lazyConnect: false
            }
        },
        {
            url: "redis://127.0.0.1:7001",
            socket: {
                reconnectStrategy: false,
                connectTimeout: 100,
                lazyConnect: false
            }
        },
    ]
})

const redis = createClient({
    socket: {
        reconnectStrategy: false,
        connectTimeout: 100
    }
})

var cluster_connect;

async function run(data) {
    if (shouldExit) return;
    
    try {
        console.log(new Date());
        console.log("开始获取信息");
        
        // 使用Promise.race来设置超时
        const result = await Promise.race([
            cluster_connect.get("foo"),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('操作超时')), 2000)
            )
        ]);
        
        console.log(result);
        await cluster_connect.rPush("list", "1");
        console.log("长度", await cluster_connect.lLen("list"))
    } catch (err) {
        console.error("run函数执行出错:", err);
        console.error("错误类型:", err.constructor.name);
        console.error("错误消息:", err.message);
        
        console.log("发生错误，强制退出程序");
        forceExit();
        throw err; // 重新抛出错误
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

    try {
        cluster_connect = await cluster.connect();
        console.log("集群连接成功");
    } catch (err) {
        console.error("集群连接失败:", err);
        forceExit();
        return;
    }
    
    let data;
    let redis_client;
    
    try {
        redis_client = await redis.connect();
        console.log("单机Redis连接成功");
    } catch (err) {
        console.error("单机Redis连接失败:", err);
        forceExit();
        return;
    }
    
    while (!shouldExit) {
        try {
            data = await redis_client.BLPOP("task", 10)
            if (!data) {
                console.log("没有任务")
                continue;
            } else {
                console.log("有任务", data)
                await run(data);
                console.log("任务执行完成");
            }
        } catch (err) {
            console.error("处理任务时出错:", err);
            console.error("错误类型:", err.constructor.name);
            console.error("错误消息:", err.message);
            
            console.log("主循环检测到错误，强制退出程序");
            forceExit();
            break; // 退出循环
        }
    }
    
    console.log("主循环结束");
}

// 设置一个定时器，如果程序运行超过30秒就强制退出
setTimeout(() => {
    if (!shouldExit) {
        console.log("程序运行超时，强制退出");
        forceExit();
    }
}, 30000);

main().catch(err => {
    console.log("main函数出错:", err)
    forceExit();
})
