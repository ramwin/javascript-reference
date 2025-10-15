import { Redis, Cluster } from "ioredis";

var cnt = 0;

const client = new Cluster(
    [
        "localhost:7000",
    ],
    {
        clusterRetryStrategy: (() => {
            return
        })
    }
)

const task_client = new Redis()

async function run(data) {
    cnt++;
    console.log("处理", data, cnt);
    if (cnt == 5) {
        // throw Error('123');  // 直接的throw是能报错的
    }
    await client.rpush('list', 1);
}

async function main() {
    let data;
    while (true) {
        data = await task_client.blpop("task", 1);
        if (!data) {
            console.log("无数据")
        } else {
            run(data)
        }
    }
}


main();
