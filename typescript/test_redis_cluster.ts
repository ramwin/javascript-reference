import { createCluster } from "redis";


async function main() {
  console.log("测试连接集群")
  const cluster = createCluster({
      rootNodes: [
          {url: "redis://127.0.0.1:7000"},
          {url: "redis://127.0.0.1:7001"},
      ]
  })
  const client = await cluster.connect()
  console.log("一连接", cluster)
  console.log(await client.get("1"));
  console.log("结束")
  cluster.close()
}

async function test_connect_fail() {
  console.log("测试连接集群")
  const cluster = createCluster({
      rootNodes: [
          {url: "redis://127.0.0.1:7008"},
      ]
  })
  // 连不上会报错
  const client = await cluster.connect()
  console.log(await client.get("foo"))
  client.close()
}

test_connect_fail()
