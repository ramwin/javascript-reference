pk = 62298758042757841625343873165345264392391902469155567275684841723575343971657;
e = 65537;
message = 97;
d = 10778729838821294325186904768632222287380193239855691503842802061313467948465;
p = 79132827489487693969079390893265067161053;
q = 787268192218126488534109938043903069;
var num = message;
for (var i=1;i<=e;i++){
    num = (num*num)%pk;
}
console.log("num已经计算得到");
console.log(num);
var crypto_text = ''
while (num >0){
    var single = num%10;
    crypto_text = single.toString() + crypto_text;
    num = (num-num%10)/10;
    }
console.log(crypto_text);
