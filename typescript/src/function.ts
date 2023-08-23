function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string>('123');


type Log = <T>(value: T) => T

let myLog: Log = log
myLog(123)
