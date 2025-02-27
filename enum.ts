enum State {
  TODO = "待执行",
  DONE = "完成",
}

const StateInfo = {
  State[TODO]: 1,
  "完成": 2,
}

console.log(StateInfo)
