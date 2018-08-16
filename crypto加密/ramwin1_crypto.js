function ramwin1_rsa_crypto(pk, e, message,d){
    this.message = message; // the plain txt need to be encrypted
    this.pk = pk;   // the public key of rsa encryption
    this.e = e;
    this.message_to_int = function (){  // 把字符串变成数字,十六进制
        var int_of_message = '';
        for(var i=0;i<this.message.length;i++){
            var tmp = message[i].charCodeAt().toString(16);
            int_of_message = int_of_message+tmp;
            }
        return int_of_message;
    }
    this.crypto_message = function (){  // 输出加密后的十进制数字
        var int_of_message = this.message_to_int();
        num = parseInt(int_of_message,16);
        for(var i=1;i<=e;i++){
            num = num*num%this.pk;
        }
        console.log("num已经计算得到");
        var crypto_message = '';
        var j=0;
        while(num>=0){
            j += 1;
            console.log(j);
            crypto_message = (num%10).toString() + crypto_message;
            num = (num-num%10)/10;
            }
        console.log('字符串已经生成');
        return crypto_message;
    }
    this.random_int = function (){
        return Math.round(Math.random()*4+3);
    }
    this.x = this.random_int();
    this.test = function(text){
        console.log(text);
    }
}    
test = new ramwin1_rsa_crypto(7766920226891562617962054884663078395971060495108464987128541745764941553655727507472280404780266913475484013816695487593950930812128221361746485299363207,65537,'zawer',2949170847707349066145623629474048337332191592852497844037623958120764917655773743970515824529067251709926347406040522057436384238912928070698502347100753);
num = test.crypto_message();
num.toString();
console.log(num);
