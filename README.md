**Xiang Wang @ 2015-11-23 18:56:23**

# Menu
* [mozilla official reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Object basic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

# [Guide](guide导览.md)
# [Standard built-in objects 内置对象](./build_in_objects内置对象.md)
* ## [Array数组](./array.md)
* ## Date
* ## Math [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
    * Math.floor [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    返回一个数字的整数部分，如果是null的话，会返回0, 如果是 -5.05 会返回-6，所以返回的是小于等于这个数字的最大整数
    返回一个数字的divmod, [答案](https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript), 不支持负数
* ## Object
* ## RegExp
* ## [String](./build_in_objects内置对象.md#String)

# [Expressions and operators 操作符号，表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
## [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
you must use index instead of value for a list, so the `in` operator means has property or not, it doesn't means the object contains the item
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

* ## Operator precedence 执行顺序 [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)


# [Statements & declarations 语法](statements_and_declarations语法.md)
* do...while
这个和while相比, 能保证执行一次.
```
    do {
    } whilte (condition);
```
* ## switch

# [Functions函数](./functions函数.md)

# webapi [官网](https://developer.mozilla.org/en-US/docs/Web/API)
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
    * [ ] clearInterval
    * [ ] clearTimeout
    * [ ] createImageBitmap()
    * [ ] fetch()
    * [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
        ```javascript
        function happy() {
            console.log("");
        }
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
