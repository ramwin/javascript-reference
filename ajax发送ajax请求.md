**Author**: *Xiang Wang* @ 2016-05-30 11:46:32  
**e-mail**: [*ramwin@qq.com*](mailto:ramwin@qq.com)

# 使用 jQuery
    $.ajax({
            url:"/upload/file/",
            type: "POST",
            async: false,   # 异步，我一般是false

            # 普通请求
            data: {
                data:reader2.result,
            },

            # json请求
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),

            beforeSend: function(request) {
                        request.setRequestHeader("Test", "Chenxizhang");
                    },
            success:function(responseTxt){
                console.log('ok');
            },
            error: function(response){
                console.log("错误")
            },
    });


## 后台处理
    # 普通请求
    new Date();  # 后台接受的是"Fri Sep 23 2016 10:34:51 GMT+0800 (CST)"字符串
    data = {"list": [1,2,3]}    # 会无法处理，因为直接form无法传递list和dict

    # json请求
    new Date();  # 后台接受的是 "2016-09-23T02:54:32.845Z" 格式的字符串
