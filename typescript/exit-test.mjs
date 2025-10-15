import { createCluster } from 'redis'

const cluster = createCluster({
  rootNodes: [
    { url: 'redis://127.0.0.1:7000', socket: { reconnectStrategy: false } },
    { url: 'redis://127.0.0.1:7001', socket: { reconnectStrategy: false } }
  ],
  // 2. 关键：命令也不准重试
  commandsQueueStrategy: 'fail'   // 4.6+ 字段，一旦断线立即拒掉命令
})

const conn = await cluster.connect()

// 3. 未捕获就死
process.on('unhandledRejection', (reason) => {
  console.error('fatal', reason)
  process.exit(1)
})

// 4. 每 500 ms 一次 GET
setInterval(async () => {
  console.log('>>> before get')
  await conn.get('foo')   // 集群一挂，这里立刻抛
  console.log('<<< after  get')
}, 500)
