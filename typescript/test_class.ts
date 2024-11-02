class Person {
  TYPE = "Person"
  hello() {
    console.log("hello from", this.TYPE)
  }
}

class Student extends Person {
  TYPE = "Student"
}


function main() {
  const alice = new Student()
  alice.hello()
}

main()