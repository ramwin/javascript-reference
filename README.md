**Xiang Wang @ 2015-11-23 18:56:23**

[火狐官方文档][官网]  
[对象基础][对象基础文档]  


# [Guide](guide导览.md)

# [内置对象](./build_in_objects内置对象.md)
Standard built-in objects 

* [Array数组](./array.md)
* Boolean
*返回一个数的布尔值*
0, -0, null, false, Nan, undefined, ""会变成false, 其他都是true(包括`{}`和`[]`)
* Date
* [Math][Math]
    * [Math.floor][Math.floor]  
    返回的是小于等于这个数字的最大整数
    ```
    Math.floor(null) = 0;
    Math.floor(-5.05) = -6;
    ```
    返回一个数字的divmod, 不支持负数
    ```
    var quotient = Math.floor(y/x);
    var remainder = y % x;
    ```
* Object
* ## [RegExp](./build_in_objects内置对象.md)
* [String](./build_in_objects内置对象.md#String)

# [操作符号，表达式][expression]
Expressions and operators 

* [in][in]  
you must use index instead of value for a list, so the `in` operator means has property or not, it doesn't means the object contains the item
  ```
  obj = {'key': 'value'}
  'key' in obj  // true
  list = ['a', 'b', 'c']
  1 in list  // true
  3 in list  // false
  'a' in list  // false
  ```

* ## [逻辑操作][逻辑操作]  
Logical Operators 
    * `&&` and
    * `||` or
    * `!` not

* 执行顺序 *Operator precedence*  
[官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


# [语法](statements_and_declarations语法.md)
*Statements & declarations*

* do...while
这个和while相比, 能保证执行一次.
```
    do {
    } whilte (condition);
```
* ## switch

# [Functions函数](./functions函数.md)

# [webapi](./webapi/README.md)

## [Element](./webapi/element.md)

## [GlobalEventHandlers](./webapi/README.md)
* ### onkeydown

## WebSocket API

## Window
* location *返回一个Location对象*
    * 访问新的页面: location = "https://www.mozilla.org";
    * 刷新页面 location.reload(true);

## 其他
* [WindowOrWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope)
    * [ ] caches
    * [ ] indexedDB
    * [ ] isSecureContext
    * [ ] origin
    * [ ] atob
    * [ ] btoa
    * [ ] clearInterval: `scope.clearInterval(intervalID)`
    * [ ] clearTimeout
    * [ ] createImageBitmap()
    * [ ] fetch()
    * [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
        ```javascript
        function happy() {
            console.log("");
        }
        var intervalID = window.setInterval(happy, 500)
        ```
    * [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)  
        setTimeout return an timeoutId(integer), it share the same id with setInterval. The clearTimeout() and clearInterval() can technicaly be used interchangebaly.
        * Syntax: `var timeoutId = scope.setTimeout(function, delay, param1, param2, ...)`
        * Example: `timeoutId = window.setTimeout(window.alert, 2000, 'That was relly slow!');`
* scroll滚动
    * 滚动到页面底部后更新  
    ```
        $(window).scroll(function() {
           if($(window).scrollTop() + $(window).height() +1 >= $(document).height()) {
               user_list_vm.show_more();
           }
        });
    ```

# 第三方包
## Lodash
### 基础
*一致性、模块化、高性能的 JavaScript 实用工具库。*
[测试](test/lodash.html)
* 安装
```
<script src="https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js"></script>
```
### Function
* debounce
调用一个函数，这个函数必须要是多少秒之内没有被调用过的
```
_.debounce(func, [wait=0], [options={}])
// 返回一个func, 之后调用这个新生成的func
// 避免window的尺寸in flux的时候变化
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
```


[官网]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[对象基础文档]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[Math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[Math.floor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
[expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
[in]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[逻辑操作]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
