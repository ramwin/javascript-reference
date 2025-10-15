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
});

const client = await cluster.connect();

async function run(id: int) {
  console.log(id)
  if (id == 2) {
    client._execute("shutdown");
    // client.disconnect();
    await client.incr('foo');
  }
}

async function main() {
  await run(1);
  await run(2);
  await run(3);
}

await main()
