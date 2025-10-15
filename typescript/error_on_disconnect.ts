import { createCluster, createClient } from "redis";

// 全局错误处理
process.on('uncaughtException', (err) => {
    console.error('未捕获的异常:', err);
    console.error('错误类型:', err.constructor.name);
    console.error('错误消息:', err.message);
    
    if (err.message.includes('Socket closed') || 
        err.message.includes('ECONNREFUSED') ||
        err.constructor.name.includes('SocketClosedUnexpectedlyError')) {
        console.log('全局错误处理器检测到连接错误，强制退出程序');
        // 使用更强制性的退出方式
        setTimeout(() => {
            // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
        }, 100);
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
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
            console.log('全局Promise拒绝处理器检测到连接错误，强制退出程序');
            // 使用更强制性的退出方式
            setTimeout(() => {
                // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
            }, 100);
            // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
        }
    }
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
        connectTimeout: 5000
    }
})
var cluster_connect;


async function run(data) {
    try {
        console.log(new Date());
        console.log("开始获取信息");
        console.log(await cluster_connect.get("foo").catch(err=>{
          console.log("无法获取foo");
          process.exit(1);
        }))
        await cluster_connect.rPush("list", "1");
        console.log("长度", await cluster_connect.lLen("list"))
    } catch (err) {
        console.error("run函数执行出错:", err);
        console.error("错误类型:", err.constructor.name);
        console.error("错误消息:", err.message);
        
        // 主动断开所有连接
        try {
            await cluster_connect.disconnect();
            await redis.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        
        console.log("发生错误，退出程序");
        // 使用更强制性的退出方式
        setTimeout(() => {
            // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
        }, 100);
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    }
}


async function main() {

    // 在连接之前设置事件监听器
    // 监听集群连接状态
    cluster.on('error', async (err) => {
        console.error('Redis集群连接错误:', err);
        try {
            await cluster_connect?.disconnect();
            await redis.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    });
    
    cluster.on('end', async () => {
        console.log('Redis集群连接已断开');
        try {
            await redis.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    });

    cluster.on("disconnect", async () => {
        console.log('Redis集群连接已断开');
        try {
            await redis.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    });
    
    // 监听单机Redis连接状态
    redis.on('error', async (err) => {
        console.error('Redis单机连接错误:', err);
        try {
            await cluster_connect?.disconnect();
            await redis.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    });
    
    redis.on('end', async () => {
        console.log('Redis单机连接已断开');
        try {
            await cluster_connect?.disconnect();
        } catch (disconnectErr) {
            console.error("断开连接时出错:", disconnectErr);
        }
        // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
    });

    cluster_connect = await cluster.connect();
    
    let data;
    //   for (let i=0; i<=3; i++) {
    const redis_client = await redis.connect();
    
    while (true) {
        try {
            data = await redis_client.BLPOP("task", 10)
            if (!data) {
                console.log("没有任务")
                continue;
            } else {
                console.log("有任务", data)
                await run(data).catch(err => {
                  console.log("退出");
                  process.exit(1);
                });
                console.log("不退出");
            }
        } catch (err) {
            console.error("处理任务时出错:", err);
            console.error("错误类型:", err.constructor.name);
            console.error("错误消息:", err.message);
            
            // 检查是否是连接相关的错误
            const errorMessage = err.message || '';
            const errorName = err.constructor.name || '';
            
            if (errorMessage.includes('Connection') || 
                errorMessage.includes('ECONNREFUSED') || 
                errorMessage.includes('Socket closed') ||
                errorName.includes('SocketClosedUnexpectedlyError') ||
                errorName.includes('ConnectionError')) {
                console.log("主循环检测到连接错误，退出程序");
                // 使用更强制性的退出方式
        setTimeout(() => {
            process.exit(1);
        }, 100);
        process.exit(1);
            }
            // 其他错误继续运行
        }
    }
}

main().catch(err => {
    console.log("有报错", err)
    console.log("结束")
    process.exit(1)
})
