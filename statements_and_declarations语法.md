**Xiang Wang @ 2018-08-14 09:16:49**


# [Statements & declarations 语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)
* ## [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
it cannot change through re-assignment, and it can't be redeclared. It does not mean the value it holds is immutable. User `Object.freeze()` to set the variable immutable.
```
const name1=value1 [, name2=value2]
const O = new Object()  // usually we will use all-uppercase letters
O.b = 2
```
* ## for:
    ```
    for (var i=1; i<10; i++){
        console.log(i)
    }
    ```
* ## for of:
    ```
    for ( let i of [4, 3, 2]) { console.log(i)}
    ```
* ## [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in):  
    `for in`的顺序是不一定的，不能依赖他的顺序，也不能用于`Array`
    ```
    var string1 = "";
    var object1 = {a: 1, b:2, c:3};
    for (var property1 in object1) {
        string1 = string1 + object1[property1];
    }
    console.log(string1);  // "123"
    ```
* ## [function 函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
```
function myfunction() {
  console.log(arguments)  // show the arguments
}
```

* ## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
```
switch (expression) {
    case value1:
        // statements
        break  // break is necessary, otherwise the statements will continue execute
    case value2:
        // statements
        break
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
