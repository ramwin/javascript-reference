<!DOCTYPE html>
<html>
    <head>
    <title>使用checked来设定默认选项</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <form id='form1'>
            男:<input type='radio' name='sex' checked=true value='男'/>
            女:<input id='w' type='radio' name='sex' value='女'/>
        </form>
        <script>
            form = document.forms['form1'];
            console.log(form.sex.value)
        </script>
    </body>
</html>
