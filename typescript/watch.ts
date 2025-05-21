import { createCluster, RedisClusterType } from "redis";

const cluster = createCluster({
    rootNodes: [
        {url: "redis://127.0.0.1:7000"},
        {url: "redis://127.0.0.1:7001"},
    ]
})

class WatchCommand {
  readonly KEY: string = "list"
  constructor() {
    console.log("construct")
  }
  async initRedis() {
    await cluster.connect()
  }
  async run() {
    await this.initRedis()
    console.log("我监听的是:", this.KEY)
    for (let i=0; i<=10; i++) {
      console.log(await cluster.blPop(this.KEY, 0))
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
