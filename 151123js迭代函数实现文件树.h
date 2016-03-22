<html>
    <head>
        <meta charset="utf-8"/>
        <style type="text/css">
            div{
                margin: 20px;
                }
            span{
                margin: 20px;
                display: block;
                }
            .directory{
                border: 1px solid red;}
            .file{
                border: 1px solid blue;}
        </style>
    </head>
    <body>
        <div id='test'></div>
        <script>
        dict_of_tree = {
            "is_directory": true, 
            "name": "/", 
            "children":
                [
                    {   "is_directory":true,
                        "name":"test_directory",
                        "children":
                            [
                                {
                                    "is_directory":false,
                                    "name":"test.txt",
                                },
                                {
                                    "is_directory":false,
                                    "name":"test2.txt",
                                },
                                {
                                    "is_directory":true,
                                    "name":"empty_dir",
                                    "children":[],
                                },
                            ],
                    },
                    {
                        "is_directory":false,
                        "name":"test.txt",
                    },
                ],
            }
        // 通过迭代生成文件树
        function dict_to_div(dict){ // 把对象变成div
            var div_of_directory = document.createElement("div");
            div_of_directory.setAttribute("name",dict["name"]);
            div_of_directory.className = "directory";
            div_of_directory.appendChild(create_directory(dict["name"]));
            for (var x of dict["children"]) {
                if (x["is_directory"] == false) {
                        span_of_file = create_file(x["name"]);
                        div_of_directory.appendChild(span_of_file);
                    }
                else{
                        new_div = dict_to_div(x);
                        div_of_directory.appendChild(new_div);
                    }
                }
           return div_of_directory;
        }
        //  点击目录后触发的功能
        function click_directory(directory){
            alert("您点击了目录");
            }
        var test_div = document.getElementById("test");
        tree_div = dict_to_div(dict_of_tree);
        test_div.appendChild(tree_div);
        console.log(tree_div = tree_div);
        // 创建目录对象
        function create_directory(directory_name) {
        	span_of_file = document.createElement("div");
            span_of_file.innerHTML = directory_name;
            span_of_file.onclick = function () {
            	alert("您点击了目录"+this.innerHTML);
            }
            return span_of_file;
        }
        // 创建文件对象
        function create_file(file_name) {
        	span_of_file = document.createElement("div");
        	span_of_file.innerHTML = file_name;
        	span_of_file.className = "file";
        	span_of_file.onclick = function () {
        		alert("您点击了文件" + this.innerHTML);
        	}
        	return span_of_file;
        }
        </script>
    </body>
</html>
