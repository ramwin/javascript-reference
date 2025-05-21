import {WatchCommand} from "./watch"


class Sub2 extends WatchCommand {
  readonly KEY = "list2"
}


async function main() {
  const task = new Sub2()
  await task.run()
}

main()
