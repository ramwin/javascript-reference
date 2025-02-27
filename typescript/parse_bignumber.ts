import { JSONParse, JSONStringify } from "json-with-bigint";


function test_json_with_bigint() {
  // const data = { bigNumber: 9007199254740992n }
  const data = 9007199254740992n
  const string = JSONStringify(data)
  console.log("字符串", string)
  const result = JSONParse(string)
  console.log("结果", result)
}

console.log(JSON.parse('1000'))
console.log("默认情况下,很大的数字会变成科学计数法")
console.log(JSON.parse('100000000000000000000000000000000000001'))
const result = JSONParse('100000000000000000000000000000000000001')
console.log(typeof result);
test_json_with_bigint()
