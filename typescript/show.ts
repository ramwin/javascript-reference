import {WatchCommand} from "./watch"


class Sub extends WatchCommand {
}


async function main() {
  const task = new Sub()
  await task.run()
}

main()
