interface Person {
  name: string;
  birth: number;
}


function greet(person: Person) {
  console.info(`Hello: ${person.name}`)
}


function main() {
  let person: Person = {name: "张三", birth: 2000};
  greet(person)
}
main()
