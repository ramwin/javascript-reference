function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayhello = function (name){
        this.a = name
        };
    }
function sayhello(){
    console.log('hi');
}
i = new person('Xiang', 'Wang');
console.log(i.sayhello('aa'));
console.log(i.a);
