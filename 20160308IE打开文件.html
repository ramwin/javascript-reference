<!DOCTYPE html>
<html>
    <head>
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <script>
            function test(dom){
                // alert('function test has been called');
                var input = document.getElementById("input");
                var filePath = input.value;
                // alert(filePath);
                // var oStream = new ActiveXObject("ADODB.Stream");
                // oStream.adOpenStreamAsync = 0;
                // oStream.Mode = 1;
                // oStream.Type = 1;
                // oStream.LoadFromFile(filePath);
                // // oStream.Open(filePath);
                // var content = oStream.Read(4);
                // alert(content);
                // var content = oStream.Read(400);
                // alert(content);

                // 只能处理文本
                var fso = new ActiveXObject("Scripting.FileSystemObject");
                var f1 = fso.GetFile(filePath);
                var fh = fso.OpenTextFile(f1, 1);
                var content = '';
                // alert('开始读取文件');
                while (!fh.AtEndOfStream) {
                    // alert('正在读取文件');
                    // alert('continue read');
                    // text = fh.ReadLine(); // 会删除后面的换行符
                    // alert(text)
                    text = fh.ReadAll();
                    // text = fh.Read();
                    content += text;
                }
                alert('文件读取完毕');
                fh.close()
                var text = 'we';
                // alert(text.length);
                // alert(content.length);
                // alert(content[0].charCodeAt().toString(16));

                // alert(content.length);
                alert('prepare to send request');
                result = ''
                function str_to_hex(str){
                    var result = str.charCodeAt().toString(16);
                    if (result.length==1) {
                        return '000' + result;}
                    else { 
                        if (result.length==2) {
                            return '00' + result;
                        }
                        else {
                            return result;
                        }
                    }
                }
                for (var i=0;i<content.length;i++){
                    var after = str_to_hex(content[i]);
                    // alert(after);
                    result += after;
                }
                var xdr = new XDomainRequest();
                xdr.open("POST", "http://192.168.1.111:23759/postparams/");
                function loadd() {
                    // alert('loadd');
                    // alert(xdr.responseText);
                }
                xdr.onload = loadd;
                // alert(content);
                // alert(result);
                xdr.send(result);
                //var xmlDoc;
                //xmlDoc = new ActiveXObject("Scripting.FileSystemObject");
                //xmlDoc.async = false;
                //xmlDoc.load(input.value);
                //alert(xmlDoc.readyState);
                //alert(xmlDoc.length);
            }
            function upload(input) {
                return 0;
                // var xmlDoc;
                // xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                // xmlDoc.async = false;
                // xmlDoc.load(input.value);
                // alert(xmlDoc.xml);
            }
            function filenettest(dom) {
                alert('filenettest函数被调用');
                var xdr = new XDomainRequest();
                // xdr.open("POST", "http://192.168.1.88:4562/TestWebbiding/v1/webbiding/testupload/");
                xdr.open("POST", "http://192.168.1.111:23759/postparams/");
                function loadd() {
                    alert('loadd');
                    alert(xdr.responseText);
                    document.getElementById('text').style.color='red';
                    alert('ok');
                    // window.location= 'http://www.baidu.com';
                    return 0;
                }
                xdr.onload = loadd;
                xdr.send('1234');
            }
        </script>
        <h1>How can IE8 open a file and read the binary data of the file</h1>
        <form>
            choose a file: <input id='input' type='file' onchange="upload(this)" /><br>
            <button onclick='test(this)'>click me</button>
            <button onclick='filenettest(this)'>测试filenetapi</button>
            <p id='text'>test</p>
        </form>
    </body>
</html>
