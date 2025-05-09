import { createClient } from "redis"

const client = await createClient({url: "redis://localhost:6382"})
  .on("error", err => console.log("无法连接", err))
  .connect()
  .catch(res => console.log("报错", res))

await client

await client.set('foo', 'bar')
const value = await client.get('foo')
console.log(value)
await client.disconnect()
