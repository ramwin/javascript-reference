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

* 字符串格式化
    ```
    i = 2
    console.log(`1${i}3`)
    // "123"
    ```

# [Statements & declarations 语法](./statements_and_declarations语法.md)

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
