**Xiang Wang @ 2018-08-14 09:15:38**

# [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
* [ ] Introduction
* ## [Working with objects 使用对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
    * `object[obj] = value`: 
    > the inner obj can be anything, but since the object only accept string as a key, it will call obj.toString() as the key
    * [Enumerate_the_properties_of_an_object 枚举一个对象的所有属性](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Enumerate_the_properties_of_an_object)
    ```
    for (var i in object) {console.log(object[i])}
    ```
    * Creating new objects
    ```
    # Using object initializers
    var obj = {property_1: value_1, ..}

    # Using a constructor function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    var mycar = new Car('Eagle', 'Talon TSi', 1993);
    ```
    * [ ] use Object.create()
    * [ ] Inheritance 继承
    * use jquery to extend a dict `$.extend(obj1, obj2, ...)`
* [ ] Meta programming

