// Xiang Wang @ 2016-11-23 10:46:13

try{
  console.log("正在try")
  console.log(1/0)  //这个js竟然不报错
  throw("can't divided by zero");
}
catch(err){
  console.log("catch到了错误");
  console.log(err)
}
finally {
  console.log("执行完毕");
}
