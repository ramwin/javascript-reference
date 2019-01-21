**Xiang Wang @ 2019-01-21 17:11:00**

# Functions
[官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
* [ ] Arrow functions

## default functions
```
function multiply(a, b=1) {
}
```
### 注意事项
* 但是如果你传入了`b=undefined`, 那么b仍然等于1
* 每次调用函数，默认变量都会重新生成，而不会继续使用这个变量(和python不同)
```
function append(value, array=[]) {
    array.push(value);
    return array
}

append(1); //[1]
append(2); //[2], 如果是python, 就会返回 [1, 2]

function callSomething(thing = something()) {
 return thing;
}

let numberOfTimesCalled = 0;  // 可以利用something来记录函数调用次数
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

* 后面的默认值，可以调用前面的参数
```
function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message];
}

greet('David', 'Hi');  // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!');  // ["David", "Hi", "Happy Birthday!"]
```

* 参数只会按照顺序赋值给变量，而不根据是否有default来
```
function f(x = 1, y) { 
  return [x, y]; 
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

* [ ] [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#Destructured_parameter_with_default_value_assignment)
