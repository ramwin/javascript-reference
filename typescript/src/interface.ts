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