#### 学习javascript有关的知识


# 基础
* [mozilla官方参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# 内置对象或者函数
## [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* 示例代码
    ```
    var fruits = ['Apple', 'Banana'];  // ['Apple', "Banana']
    fruits.indexOf('Apple');  // 0
    fruits.indexOf('Pear');  // -1
    fruits.splice(0, 1); // delete one item from index 0, ['Banana']
    fruits.forEach(function(item, index, array) {
        console.log(item, index);
    });
    ```
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

## [RegExp正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
* 示例代码: `'123fea'.replace(/\d+/, 'd')`

# 操作符号，表达式  
* 字符串格式化
    ```
    i = 2
    console.log(`1${i}3`)
    // "123"
    ```

# 语法
* for:
    ```
    for (var i=1; i<10; i++){
        console.log(i)
    }
    ```
* for of:
    ```
    for ( let i of [4, 3, 2]) { console.log(i)}
    ```
* [for in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in):  
    `for in`的顺序是不一定的，不能依赖他的顺序，也不能用于`Array`
    ```
    var string1 = "";
    var object1 = {a: 1, b:2, c:3};
    for (var property1 in object1) {
        string1 = string1 + object1[property1];
    }
    console.log(string1);  // "123"
    ```

# 基础
* 操作符号
    * `&&` and
    * `||` or
    * `!` not

# [训练学习](https://gomakethings.com/guides/)
# [ajax](./ajax发送ajax请求.md)
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
