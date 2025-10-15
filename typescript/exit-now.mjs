import { createCluster } from 'redis'

const cluster = createCluster({
  rootNodes: [
    { url: 'redis://127.0.0.1:7000', socket: { reconnectStrategy: false } },
    { url: 'redis://127.0.0.1:7001', socket: { reconnectStrategy: false } }
  ],
  commandsQueueStrategy: 'fail'   // 4.6+ 立即拒命令
})

const conn = await cluster.connect()

// 每 500 ms 一次 GET；**失败就当场 exit**
while (true) {
  try {
    console.log('>>> before get')
    await conn.get('foo')
    console.log('<<< after  get')
  } catch (e) {
    console.error('get 失败', e)
    process.exit(1)      // ← 立即退出，不依赖任何未捕获事件
  }
  await new Promise(r => setTimeout(r, 500))
}
