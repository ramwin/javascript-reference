

function test_as() {
    interface Student {
        id: number
    }
    const data = {
        id: 3,
        name: '123'
    } as Student
    let lily: Student = data;
    let amy: Student = data;
}