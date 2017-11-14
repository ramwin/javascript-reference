#### Xiang Wang @ 2017-01-22 15:46:43


# Arrow
    a => a.length
    # 等价于
    function(a) {
        return a.length
    }

    function Person(){
      this.age = 0;

      setInterval(() => {
        this.age++; // |this| properly refers to the person object
      }, 1000);
    }

    var p = new Person();

# Class
    class Person {
        constructor(name) {
            this.name = name
        }
        getName() {
            return this.name
        }
        get nameLength() {  // 这个是property
            return this.name.length
        }
        set NewName(name) {
            this.name = name
        }
        static head_count() {  // staticmethod
            return "Person的头有1个"
        }
        eat() {
            console.log("我是人，我要吃东西")
        }
    }
    class Student extends Person{
        getName() {
            return this.name + ",并且我是学生"
        }
        eat() {
            super.eat();
            console.log("我是学生，我还要多吃点");
        }
    }


# 字符串格式化
    var age = 25;
    `${age}`

# 参数传输
    function f(x, y=12, ...args) {
        console.log(x)
        console.log(y)
        console.log(args)
    }
    f(...[1,2,3,4])

