// Xiang Wang @ 2019-01-22 18:32:19


var promise1 = new Promise(function(resolve, reject) {
  console.log("执行异步任务1")
  var promiseid = Math.random();
  console.info(`任务id${promiseid}`)
  setTimeout(function() {
    console.info(`任务1结束, id${promiseid}`)
    resolve(promiseid)
  }, 2000)
});
var promise2 = new Promise(function(resolve, reject) {
  console.log("执行异步任务2")
  var promiseid = Math.random();
  console.info(`任务id${promiseid}`)
  setTimeout(function() {
    resolve(promiseid)
    console.info(`任务2结束, id${promiseid}`)
  }, 1000)
});


function mycall() {
  promise1.then(function(value) {
    console.log('value');
  });
}
function mycall2() {
  promise2.then(function(value) {
    console.log('value');
  });
}
