#### Xiang Wang @ 2016-10-12 16:29:04

# 示例
    获取当前滚动位置，判断是否达到底部。如果达到就发送ajax请求
    window.innerHeight  # window的高度
    document.scrollingElement.scrollTop  # 已经滚动的距离
    document.scrollingElement.scrollHeight  # 滚动元素的高度
    function scroll_message() {
        if ( window.innerHeight + document.scrollingElement.scrollTop > document.scrollingElement.scrollHeight ) {
            console.log("您已达到底部")
        }
    }
    setInterval(scroll_message, 100)
