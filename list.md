#### Xiang Wang @ 2016-11-17 11:14:39

# 基础
[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
```
    var fruits = ['Apple', 'Banana'];  // ['Apple', "Banana']
    fruits.indexOf('Apple');  // 0
    fruits.indexOf('Pear');  // -1
    fruits.splice(0, 1); // delete one item from index 0, ['Banana']
    fruits.forEach(function(item, index, array) {
        console.log(item, index);
    });
```
