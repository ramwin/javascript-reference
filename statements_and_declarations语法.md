**Xiang Wang @ 2018-08-14 09:16:49**

[Statements & declarations 语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)

## [const][const]
it cannot change through re-assignment, and it can't be redeclared.  
It does not mean the value it holds is immutable.
Use `Object.freeze()` to set the variable immutable.
```
const name1=value1 [, name2=value2]
const O = new Object()  // usually we will use all-uppercase letters
O.b = 2
```

## [continue][continue]
结束当前iteration的运行,进行下一个iteration
* 和for一起用
```
for (var i = 0; i<10; i++) {
    if (i===3) {
        continue;
    }
    console.info(i);  // 012456789
}
```

* 和while一起用
```
var i = 0
while (i < 5) {
    i++
    if (i === 3) {
        continue
    }
    console.log(i)
}
```
* 和 label 一起用
```
var i = 0;
var j = 9;
checkiandj: while(i < 4) {
    checkj: while(j > 4) {
        j-=1
        if ((j%2) == 0)
            continue checkj  // 默认是最近的循环, 所以默认就是checkj
    }
}
```


## for:
```
for (var i=1; i<10; i++){
    console.log(i)
}
```

## [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 循环对象:  
`for in`的顺序是不一定的，不能依赖他的顺序，也不能用于`Array`
```
var string1 = "";
var object1 = {a: 1, b:2, c:3};
for (var property1 in object1) {
    string1 = string1 + object1[property1];
}
console.log(string1);  // "123"
```

## [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 循环列表
```
python: for i in 
javascript: for (let i of list) {}
a = [{key: 'bar'}, {key1: 'foo'}]
for (let i of a) {console.info(i)}
// {key: "bar"}
// {key1: "foo"}
```

## [function 函数](./functions函数.md)
```
function myfunction() {
  console.log(arguments)  // show the arguments
}
```

## [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* 语法
```
if (condition1) {  // 如果要执行多个命令，就加个`{}`, 用得时候最好都加上`{}`
    statement1
}
else if (condition2)
    statement2
else if (condition3)
    Statement3
else
    statementN
```
* 如果在condition里面赋值
```
if (x=y) {  // 请避免这种写法，因为看代码时赋值语句会和==弄混
    console.info("x不为空了")
} else {
    console.info("x仍然为空")
}
if ((x = y)) {  // 一定要用，最好用双括号
}
```


## [switch][switch]
* example
```
switch (expression) {
    case value1:
        // statements
        break  // break is necessary, otherwise the statements will continue execute
    case value2:
        // statements
        return  // 直接return的话就推出函数了.不用break
    case 3:  // multi case judgement
    case 4:
    case 5:
        // expression in [3,4,5]
        break
    case valueN:
        // statements
        break
    default:
        // statements  if none of the values match the expression
        break  // if you forget the break, the case value5 will still be executed
    case value5:
        // statements
        break
}
```
* 如何处理多种case [stackoverflow](https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

## [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
```
try{
  console.log("正在try")
  console.log(1/0)  //这个js竟然不报错
  throw("can't divided by zero");
}
catch(err){
  console.log("catch到了错误");
  console.log(err)
  throw err
}
finally {
  console.log("执行完毕");
  // 此时如果没有return，这个error会继续抛出到上一层的try
  // 如果有return, 这个error就不会被抛出了，外面就抓不到try了
}
```

## to be continued
* [ ] for each ... in
* [ ] import

[const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[continue]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
[switch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
