interface Student2 {
    id: number
}

const data = {
    id:1,
    extra: 2,
}

// 直接赋值不会导致属性丢失啊
const student: Student2 = data

console.log(student);

function test_interface_null() {
    // 一般用 interface|null 代表信息
    let user: Student2|null = null;
    user = {id: 3};
    user = null;
    console.log(user);
}

test_interface_null();