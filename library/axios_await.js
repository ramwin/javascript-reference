const axios = require('axios').default;

const JSON_URL = "https://httpbin.org/json"

function get_data() {
  return axios.get(JSON_URL).then(function(response) {
    console.info("数据返回了")
    console.info(response.data)
    return response.data  // 这个return会被放入then里面
  })
}

function async_get_data() {
  console.info("调用async_get_data")
  get_data()
  console.info("调用结束")
}

function sync_get_data() {
  get_data().then(res=>{
    console.info("调用结束")
    console.info(res)
  })
}

async function await_data() {
  var result = await get_data();
  console.info("await结束")
  console.info(result)
}


await_data()
