function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string>('123');


type Log = <T>(value: T) => T

let myLog: Log = log
myLog(123)


function test_rest_parameters(...rest: number[]) {
  // 接受很多个数字变成列表
  for (let i of rest) {
    console.log(i)
  }
}

test_rest_parameters(1,2,3,4);