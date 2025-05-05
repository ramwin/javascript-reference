import {config} from "@dotenvx/dotenvx";


config({path: ".env"});
config({path: ".env.shared"});


async function main() {
  console.log("获取环境变量")
  console.log("当前环境", process.env.NODE_ENV)
  console.log("当前主机", process.env.HOST)
  console.log(process.env.HOST)
}


main()
