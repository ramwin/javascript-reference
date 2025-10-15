import { createCluster, createClient } from "redis";

const cluster = createCluster({
    rootNodes: [
        {
            url: "redis://127.0.0.1:7000",
            socket: {
                reconnectStrategy: false   // 或者 () => false
            }
        },
        {
            url: "redis://127.0.0.1:7001",
            socket: {
                reconnectStrategy: false   // 或者 () => false
            }
        },
    ],
})

const redis = createClient()
var cluster_connect;


async function run(data) {
    console.log(new Date());
    console.log(await cluster_connect.get("foo"))
    await cluster_connect.rPush("list", "1");
    console.log("长度", await cluster_connect.lLen("list"))
}


async function main() {

    cluster_connect = await cluster.connect();
    let data;
    //   for (let i=0; i<=3; i++) {
    const redis_client = await redis.connect();
    while (true) {
        data = await redis_client.BLPOP("task", 10)
        if (!data) {
            console.log("没有任务")
            continue;
        } else {
            console.log("有任务", data)
            await run(data).catch(err => {
                console.error("报错了", err);
                throw err;
            });
        }
    }
}

main().catch(err => {
    console.log("有报错", err)
    console.log("结束")
    process.exit(1)
})
