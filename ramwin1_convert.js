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
        console.log(i);
        result = result + single_hex_xor(
            shorter.substring(i,i+2), longer.substring(i,i+2));
    }
    for(var j=shorter.length; j<longer.length; j=j+2){
        result = result + longer.substring(j,j+2);
    }
    console.log("result is:");
    console.log(result);
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
console.log(str_of_hex_xor('aabbccdd','aabbccdd'))
