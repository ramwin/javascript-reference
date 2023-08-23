import axios from "axios";


function test1() {
    axios.get(
        "https://httpbin.org/json",
    ).then((res)=>{
        console.log(res.data);
    })
}

function test2() {
    // 利用结构减少代码
    axios.get(
        "https://httpbin.org/json",
    ).then(({data})=>{
        console.log(data);
    })
}

function test3() {
    // 利用interface代表接口
    interface Data {
        author: string
    }
    let obj: Data = {"author": ""}
    axios.get(
        "https://httpbin.org/json",
    ).then(({data})=>{
        obj = data; 
        console.log(obj);
    })
}

test3()