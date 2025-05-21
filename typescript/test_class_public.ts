class Person2 {
  public name: string
  constructor(name: string) {
    this.name = name
  }
}

class Student2 extends Person2 {
}

function main() {
  const alice = new Student2("alice")
  console.log(alice.name)
}

main()
