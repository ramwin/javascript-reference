import { Cluster } from "ioredis";

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

async function run() {
    cnt++;
    console.log("处理", cnt);
    if (cnt == 5) {
        // throw Error('123');  // 直接的throw是能报错的
    }
    await client.rpush('list', 1);
}

async function main() {
    setInterval(run, 1000);
}


main();
