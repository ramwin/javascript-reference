const axios = require('axios').default;

const JSON_URL = "https://httpbin.org/json"

function get_data() {
  return axios.get(JSON_URL).then(function(response) {
    console.info("数据返回了")
    console.info(response.data)
    return response.data  // 这个return会被放入then里面
  })
}

function sync_get_data() {
  return get_data().then(res=>{  // 第一个return代表返回的是Promise
    console.info("调用结束", res)
    return res;  // 第二个return代表返回了什么数据在then
  })
}

function test1() {
  sync_get_data().then(res=>{
    console.info("sync_get_data")
    console.info(res)
  })
};

async function async_get_data() {
  console.info("调用async_get_data")
  get_data()  // 存在return才能被await
  console.info("async_get_data 调用结束")
}

function test2() {
  console.info("调用async的函数, 直接调用. 先返回了")
  async_get_data()
}


async function test3() {
  console.info("调用async的函数, 直接调用. 先返回了")
  // await sync_get_data()  // 返回的是Promise, 会等待
  await async_get_data()
  console.info("返回的不是Promise, 直接不等待")
  console.info("只有async的函数, 可以await")
}

test3()
