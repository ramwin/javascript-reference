import { createCluster } from 'redis'

const cluster = createCluster({
  rootNodes: [
    { url: 'redis://127.0.0.1:7000', socket: { reconnectStrategy: false } },
    { url: 'redis://127.0.0.1:7001', socket: { reconnectStrategy: false } }
  ]
})
const conn = await cluster.connect()

async function loop () {
  try {
    await conn.get('foo')
    console.log('ok')
  } catch (e) {
    console.error('cluster 已挂', e)
    process.exit(1)          // ← 这里立即退出
  }
  setTimeout(loop, 1000)     // 递归，保证下一次也在同一个 async 栈
}

loop()                       // 启动第一次
