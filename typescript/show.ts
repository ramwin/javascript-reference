import {WatchCommand} from "./watch.ts"


class Sub extends WatchCommand {
}


async function main() {
  const task = new Sub()
  await task.run()
}

main()
