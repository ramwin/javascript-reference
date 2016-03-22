<!DOCTYPE HTML>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
</head>
<body>
    <button id="test">click me</button>
    <button id="test2">wx2</button>
    <button id="test3">wx222</button>
</body>
<script type="text/javascript" >
    // 通过定义对象来创建函数库的类
    var wx = {
        test: function(){
            alert("调用了wx.test方法")
        }
    }
    
    function ntest() {
        alert("调用了普通的test")    	
    }
    
    function wx2(){
        alert("调用了wx2函数")
        function wx222() {
            alert("调用了内部的wx222函数")
        }
        alert("wx2函数结束")
        wx222();
        
    }
    function wx222() {
    	alert("普通的wx222函数")
    }
    document.getElementById("test").onclick = wx.test;
    document.getElementById("test2").onclick = wx2;    // 失败。 
    document.getElementById("test3").onclick = wx222;
</script>
</html>