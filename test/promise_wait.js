const axios = require('axios');

function test() {
  return axios.get(
    "https://httpbin.org/get"
  ).then(res=>{
    console.info("返回了数据")
    console.info(res.data)
    return res.data.url
  })
}

async function await_promise() {
  let prom = test()
  await prom
  console.info("请求执行完毕, 我才会输出, 但是需要用在async的函数里")
}

function main() {
  test().then(res=>{
    console.info("来了")
    console.info(res)
  })
  console.info("请求没执行完毕, 我会先输出")
}

main()
