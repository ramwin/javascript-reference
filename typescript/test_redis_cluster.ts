import { createCluster } from "redis";


async function main() {
  console.log("测试连接集群")
  const cluster = await createCluster({
      rootNodes: [
          {url: "redis://127.0.0.1:7000"},
          {url: "redis://127.0.0.1:7001"},
      ]
  }).connect()
  console.log("一连接", cluster)
  console.log(await cluster.get("1"));
  console.log("结束")
  cluster.close()
}

main()