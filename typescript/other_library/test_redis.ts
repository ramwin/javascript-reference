import { createClient } from "redis"

const client = await createClient().connect()

await client

await client.set('foo', 'bar')
const value = await client.get('foo')
console.log(value)
await client.disconnect()
