interface Human {
    id: number
    name?: string
}

class Student implements Human {
    constructor(id: number, name="default") {
        this.id = id
        this.name = name
    }
    hello() {
        console.log(this.id)
    }
    id: number
    name?: string
}

interface Man extends Student {
    id: number
}

function test1() {
    // 接口exted一个类, 需要实现类的方法
    const lily = new Student(1);
    console.log(lily);
    const lilei = new Student(2, "newname");
    console.log(lilei);
    lilei.hello();

    const man: Man = {id: 3, hello: ()=>{console.log(123)}};
    man.hello();
}


test1();