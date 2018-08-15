**Xiang Wang @ 2015-11-23 18:56:23**

# Menu
* [mozilla official reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Object basic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

# [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
* [ ] Introduction
* ## [Working with objects 使用对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
    * `object[obj] = value`: 
    > the inner obj can be anything, but since the object only accept string as a key, it will call obj.toString() as the key
    * [Enumerate_the_properties_of_an_object 枚举一个对象的所有属性](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Enumerate_the_properties_of_an_object)
    ```
    for (var i in object) {console.log(object[i])}
    ```
    * Creating new objects
    ```
    # Using object initializers
    var obj = {property_1: value_1, ..}

    # Using a constructor function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    var mycar = new Car('Eagle', 'Talon TSi', 1993);
    ```
    * [ ] use Object.create()
    * [ ] Inheritance 继承
    * use jquery to extend a dict `$.extend(obj1, obj2, ...)`
* [ ] Meta programming

# [Standard built-in objects 内置对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
## [Array 数组](array.md), [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
## [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* 示例代码
    ```
    new Date();  // 获取当前时间
    var time2 = new Date(3000);  // 从标准时间到现在的时间, 但是这个是localhost的
    console.log(time2);
    var time3 = new Date('2016-09-13T07:55:16.742Z');
    console.log(time3);
    console.log(time3.toISOString()) "%y-%m-%dT%H:%M:%S.000Z"这种格式
    ```
* 注意事项
    * 月份是从0开始计算的，但是日期是从1开始计算的
    * Date(2013, 13, 1) 和 Date(2014, 1, 1) 等价。类似的如果秒也是这样，那也等价
* Methods
    * Date.now()  // 1520395758500

## [Object API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* 删除一个key
    ```
    var myobj = new Object;
    myobj.a = 5;
    myobj.b = 12;
    delete myobj.a;
    ```  
## [RegExp正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
* Syntax 语法:
    ```
    /pattern/flags
    new RegExp(pattern[, flags])
    RegExp(pattern[, flags])

    /ab+c/i;
    new RegExp('ab+c', 'i');
    new RegExp(/ab+c/, 'i');
    ```
* Examples 示例
    ```
    '123fea'.replace(/\d+/, 'd')

    # change data format
    var re = /(\w+)\s(\w+)/;
    var str = 'John Smith';
    var newstr = str.replace(re, '$2, $1');
    console.log(newstr);

    # use regular expression to split lines
    var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
    var lines = text.split(/\r\n|\r|\n/);
    console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
    ```
## [String 字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
* Template literals 模板
```
`hello ${who}`
escape `<a>${who}</a>`
```


# [Expressions and operators 操作符号，表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* ## [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
> you must use index instead of value for a list, so the `in` operator means has property or not, it doesn't means the object contains the item
    ```
    obj = {'key': 'value'}
    'key' in obj  // true
    list = ['a', 'b', 'c']
    1 in list  // true
    3 in list  // false
    'a' in list  // false
    ```
* ## [Logical Operators 逻辑操作](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
    * `&&` and
    * `||` or
    * `!` not
* ## 字符串格式化
    ```
    i = 2
    console.log(`1${i}3`)
    // "123"
    ```

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

# [训练学习](https://gomakethings.com/guides/)
# [拖拽文档](./drag.md) [示例](./drag.html)
# 通用函数
    * encodeURIComponent
        ```
        encodeURIComponent('http://www.ramwin.com/?text=文字')
        >>> "https%3A%2F%2Fwww.ramwin.com%2F%3Ftext%3D%E6%96%87%E5%AD%97"
        ```

# 第三方插件
    [cropp截取头像](cropp截取头像.html)


# [webapi](https://developer.mozilla.org/en-US/docs/Web/API)
* WindowOrWorkerGlobalScope
    * [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
        ```javascript
        function happy() {
            console.log("");
        }
        ```
* scroll滚动
    * 滚动到页面底部后更新
    ```
    $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() +1 >= $(document).height()) {
       user_list_vm.show_more();
     }
    });
    ```
