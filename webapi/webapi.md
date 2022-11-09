**Xiang Wang @ 2019-05-16 14:34:54**

[文档链接](https://developer.mozilla.org/en-US/docs/Web/API)

## [Element](./element.md)
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

## [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)
[测试](./test/globalevent.html)
* [ ] oninput
* [ ] oninvalid
* ### onkeydown
按键被按下去触发
* onkeypress
不要调用此接口，已经不再被采用。按键被按了触发。
* onkeyup
按键谈起触发
```
document.onkeyup = function(res) {
    console.info(res["key"] == "PageDown")
}
```
* [ ] onload
* [ ] onloadeddata

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

## [console](https://developer.mozilla.org/en-US/docs/Web/API/Console_API)
* clear
清空日志
* group
把后面的日志都缩进起来
* groupCollapsed  
把后面的日志都缩进并折叠起来
* groupEnd
结束缩进
* table
用表格展示某个数据
