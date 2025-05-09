import { createCluster, RedisClusterType } from "redis";

const cluster = createCluster({
    rootNodes: [
        {url: "redis://127.0.0.1:7000"},
        {url: "redis://127.0.0.1:7001"},
    ]
})

class WatchCommand {
  construct() {
    console.log("construct")
  }
  async initRedis() {
    await cluster.connect()
  }
  async run() {
    await this.initRedis()
    for (let i=0; i<=10; i++) {
      console.log(await cluster.get(i.toString()))
    }
    await this.close()
  }
  async close() {
    await cluster.disconnect()
  }
}

export {
  WatchCommand
}
