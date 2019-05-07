**Xiang Wang @ 2015-11-23 18:56:23**

[火狐官方文档][官网]  
[对象基础](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)  


# [Guide](guide导览.md)
# [内置对象](./build_in_objects内置对象.md)
Standard built-in objects 

* [Array数组](./array.md)
* Boolean
* Date
* Math [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
    * Math.floor [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    返回一个数字的整数部分，如果是null的话，会返回0, 如果是 -5.05 会返回-6，所以返回的是小于等于这个数字的最大整数
    返回一个数字的divmod, [答案](https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript), 不支持负数
* Object
* ## RegExp
* [String](./build_in_objects内置对象.md#String)

# [操作符号，表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
Expressions and operators 

* [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
you must use index instead of value for a list, so the `in` operator means has property or not, it doesn't means the object contains the item
  ```
  obj = {'key': 'value'}
  'key' in obj  // true
  list = ['a', 'b', 'c']
  1 in list  // true
  3 in list  // false
  'a' in list  // false
  ```

* ## [逻辑操作](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
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

# webapi [官网](https://developer.mozilla.org/en-US/docs/Web/API)

## [Element](./webapi/element.md)
[测试](./test/elements.html)
* getBoundingClientRect
[官网](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
返回边的位置
```
var rect = dom.getBoundingClientRect()
rect.top + rect.height == rect.bottom
```

* getClientRects  
[官网](https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects)
```
var rect = dom.getClientRects()[0]
rect = {
    "x": "距离屏幕左侧距离",
    "y": "距离屏幕顶部距离",
}
```


## WebSocket API [官网](https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API)
注意，websocket没法被模拟断网来断开
### WebSocket [官网](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
* 例子
```
const socket = new WebSocket('ws://localhost:8000');
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});
// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```
#### 方法属性
* onclose
```
socket.onclose = function(e) {
    // e是一个CloseEvent, 客户端主动关闭的，就是1000
}
```
* readyState
返回websocket的状态, 由于open和close的速度太快了，一般只会出现1和3, 0只有在创建对象后立刻查看才是0
0: created, not yet open
1: open, ready
2: closing
3: closed
* 方法`close([code[, reason]])`
```
socket.close(code, reason)
```

### CloseEvent [官网](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)
当WebSockets被关闭的时候，这个对象会发送给websocket的onclose对象
* 属性
    * code: 关闭码
        * 1000, 浏览器主动关闭
        * 1006, 服务器关闭
        * 1011, 服务器报错了，无法处理请求。于是乎关闭了链接
        * 3000-3999, websocket框架的错误码, 客户端最好别用
        * 4000-4999, 客户端的错误码

### MessageEvent
当消息来的时候，这个对象会被发送出来

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
