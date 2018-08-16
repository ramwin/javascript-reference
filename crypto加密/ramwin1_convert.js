// 把十六进制表示的字符串进行异或运算
function str_of_hex_xor(a,b){
    if(a.length >= b.length){
        var shorter = b;
        var longer = a;
    }
    else {
        var shorter = a;
        var longer = b;
    }
    var result = "";
    for(var i=0; i<shorter.length; i=i+2){
        result = result + single_hex_xor(
            shorter.substring(i,i+2), longer.substring(i,i+2));
    }
    for(var j=shorter.length; j<longer.length; j=j+2){
        result = result + longer.substring(j,j+2);
    }
    return result
}
// 把十六进制表示的字符进行异或运算
function single_hex_xor(aa,bb){
    a = parseInt(aa,16);
    b = parseInt(bb,16);
    result = a^b;
    return single_int_to_hex(result);
}
// 把十进制数字转化成十六进制表示的字符串
function single_int_to_hex(single_int){
    var num = single_int;
    result = num.toString(16);
    if (result.length==1){
        result = "0" + result;
    }
    return result;
}
// 把字符串变成十六进制表示的字符
function str_to_hex(str){
    var result = '';
    for (var i=0; i<str.length;i++){
        result = result + chr_to_hex(str[i])
        }
    return result;
}
// 把单个字符变成一个十六进制表示的双字符
function chr_to_hex(character){
    var tmp = character.charCodeAt().toString(16);
    if (tmp.length <=1) {
        return '0'+tmp;
    }
    else { return tmp }
}
// 把字符串变成数字,十六进制表示的字符串
function ramwin1_to_int(message){
        var int_of_message = '';
        for(var i=0;i<message.length;i++){
            var tmp = message[i].charCodeAt().toString(16);
            int_of_message = int_of_message+tmp;
            }
        return int_of_message;
    }
// 求阶乘
function power(y,d,n){
    if (d>=2){
        x = power(y,(d-d%2)/2,n)
        if (d%2==1){
            return ( bigint_multiply(bigint_multiply(x,x,n),y,n) )%n
        }
        else {
            return ( bigint_multiply(x,x,n) )%n
        }
    }
    return y%n
}
// 两个大数字的乘法
function bigint_multiply(a,b,p) {
    if (b>=2) {
        var x = bigint_multiply(a, (b-b%2)/2, p);
        if (b%2 ==1){
            return (x*2 + a)%p;
        }
        else {
            return (x*2)%p;
        }
    }
    else {
        return a%p;
    }
}
// 密码加密算法
function ramwin1_crypto(password) {
    // 输入: password
    // 输出: password(加密的), gb
    
    // 王祥: 把 pw 加密, 得到 pw 和 gb
	var ramwin1_g = 542432643;
	var ramwin1_ga = 177885731141;
	var ramwin1_p = 421542432643;
	pw = ramwin1_to_int(password);
	// pw = parseInt(pw,16)
	ramwin1_b = Math.round(Math.random()*421542432643);
	gb = power(ramwin1_g,ramwin1_b,ramwin1_p);
	gab = power(ramwin1_ga,ramwin1_b,ramwin1_p);
	gab_md5 = hex_md5(gab.toString());
	gab = 0;
	// pw = pw^gab;
	pw = str_of_hex_xor(pw,gab_md5);
	return [pw,gb]
}