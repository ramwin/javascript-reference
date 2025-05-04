import { createCluster } from "redis";


async function main() {
  const cluster = await createCluster({
      rootNodes: [
          {url: "redis://localhost:7000"},
          {url: "redis://localhost:7001"},
      ]
  })

  await cluster.get("1");
}

main()
