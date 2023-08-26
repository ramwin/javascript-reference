import axios from "axios";

function test1() {
  axios.get("https://httpbin.org/json").then((res) => {
    console.log(res.data);
  });
}

function test2() {
  // 利用结构减少代码
  axios.get("https://httpbin.org/json").then(({ data }) => {
    console.log(data);
  });
}

function test3() {
  // 利用interface代表接口
  interface show {
    author: string;
    date: string;
  }
  interface Data {
    slideshow: show;
  }
  let obj: show = {
    author: "",
    date: "",
  };
  axios
    .get<any, { data: Data }>("https://httpbin.org/json")
    .then(({ data }) => {
      console.log("返回结果: ", data);
      obj = data.slideshow;
      console.log(obj);
    });
}

test3();
