<!DOCTYPE html>
<html>
    <head>
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <script src='./jquery.min.js'></script>
    </head>
    <body>
        <script>
            function test(){
                alert(2);
                $.ajax({
                    type:document.getElementById("method").value,
                    // url:"http://192.168.1.111:23759/getall/v1.0/device/1/sensor/1/",
                    url:document.getElementById("url").value,
                    // url:"http://localhost:8000/normal/test/",
                    // url: "http://192.168.1.111:23759/getall/v1.0/device/1/sensor/1/",
                    data:{
                        // apikey:'ewwewe'
                    },
                    dataType: "Text",
                    beforeSend: function(request) {
                        // request.setRequestHeader("Origin","http://192.168.1.88:" + document.getElementById("port").value);
                    },
                    success: function(responseTxt){
                        alert(responseTxt);
                    },
                });
            } 
        </script>
        请求url:<input id="url" style="width:500px"><br>
        请求方法:
        <select id="method">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
        </select><br>
        <button onclick='test()'>发送请求</button><br>
        正确的url: <p>http://192.168.1.111:23759/getall/v1.0/device/10/sensor/5/?apikey=RcqayFlPfIZgHTUjNFSWeyvS</p>
    </body>
</html>
