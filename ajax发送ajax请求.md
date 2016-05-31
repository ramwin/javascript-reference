**Author**: *Xiang Wang* @ 2016-05-30 11:46:32  
**e-mail**: [*ramwin@qq.com*](mailto:ramwin@qq.com)

# 使用 jQuery
    $.ajax({
            url:"/upload/file/",
            type: "POST",
            async: false,   # 异步，我一般是false
            data: {
                data:reader2.result,
            },
            beforeSend: function(request) {
                        request.setRequestHeader("Test", "Chenxizhang");
                    },
            success:function(responseTxt){
                console.log('ok');
              }
            });

