    password = 'aa'
    p = 82793;
    g = 32767;
    a = 1541;
    b = 1000;
    password = 24929;
    // 第零步, 把 password 根据ascii码变成十六进制数字,之后转化成十进制
    // var int_of_message = '';
    // for(var i=0;i<password.length;i++){
    //     var tmp = password[i].charCodeAt().toString(16);
    //     int_of_message = int_of_message+tmp;     
    //     }
    // int_of_message = parseInt(int_of_message,16)
    // 比如 password = 'aa', 十六进制就是 '6161', 十进制就是 24929
    // 第一步, 从 1 到 p-1 随即生成一个数字 b
    // var b = Math.round(Math.random()*p);
    // var b = 200
    // 第二步, 求出 g 的 b 次方, ga 的 b 次方
    function power(y,d,n){
        if (d>=2){
            x = power(y,(d-d%2)/2,n)
            if (d%2==1){
                return (x*x*y)%n
            }
            else {
                return (x*x)%n
            }
        }
        return y%n
    }
    ga = power(g,a,p);
    gb = power(g,b,p);
    gab = power(ga,b,p)
    console.log("加密前的字段为");
    console.log(password)
    console.log("gab=");
    console.log(gab);
    console.log("ga=");
    console.log(ga);
    console.log("gb=")
    console.log(gb);
    console.log("加密后字段为");
    console.log(password^gab);
