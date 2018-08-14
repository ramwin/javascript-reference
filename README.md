**Xiang Wang @ 2015-11-23 18:56:23**

# Menu
* [mozilla official reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Object basic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

# [Guide](guide导览.md)
# [Standard built-in objects 内置对象](./build_in_objects内置对象.md)
* ## Array数组
* ## Date
* ## Object
* ## RegExp
* ## [String](./build_in_objects内置对象.md#String)

# [Expressions and operators 操作符号，表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* [Logical Operators 逻辑操作](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
    * `&&` and
    * `||` or
    * `!` not

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
