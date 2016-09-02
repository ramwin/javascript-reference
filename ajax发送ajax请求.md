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
            }
    });

