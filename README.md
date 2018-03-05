# javascript_tutorial

* 内置对象
* 操作符号，表达式
    * 字符串格式化
        i = 2
        console.log(`1${i}3`)
        // "123"
* 语法
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
* 基础
    * 操作符号
        * `&&` and
        * `||` or
        * `!` not

* [训练学习](https://gomakethings.com/guides/)
* [ajax](./ajax发送ajax请求.md)
* [拖拽文档](./drag.md) [示例](./drag.html)
* 通用函数
    * encodeURIComponent
        ```
        encodeURIComponent('http://www.ramwin.com/?text=文字')
        >>> "https%3A%2F%2Fwww.ramwin.com%2F%3Ftext%3D%E6%96%87%E5%AD%97"
        ```

* 第三方插件
    [cropp截取头像](cropp截取头像.html)
