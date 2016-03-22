<!DOCTYPE html>
<html>
    <head>
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <script src="./jquery.min.js"></script>
    <style>
        div {
            border: 1px solid grey;
            margin: 10px;
        }
    </style>
    <script>
        function test(){
            console.log('test函数');
            text = document.getElementById('text').value;
            console.log('搜索的字符串是');
            console.log(text);
            tree_div = document.getElementById('home');
            after_div = document.getElementById('after');
            after_div.appendChild(filter(tree_div, text));
        }
        function filter(div,text){
            console.log('filter函数');
            console.log(div);
            var exist = 0;
            return div;
        }
    </script>
    </head>
    <body>
        <input id='text' type='test'><button onclick='test()'>搜索</button><br>
        <div id="home">
            <span>根目录</span>
            <div>
                <span>文件夹1</span>
            </div>
            <div>
                <span>文件夹2</span>
                <div>
                    <span>文件1</span>
                </div>
                <div>
                    <span>文件2</span>
                </div>
                <div>
                    <span>文件3</span>
                </div>
            </div>
            <div>
                <span>文件夹3</span>
            </div>
        </div>
        <div id="after"></div>
    </body>
</html>
