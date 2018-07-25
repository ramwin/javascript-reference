**Xiang Wang @ 2018-07-24 15:36:15**


## [Array 数组](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
### Basic Example

```javascript
var fruits = ['Apple', 'Banana'];  // ['Apple', "Banana'] create an array
fruits.length;
var first = fruits[0];  // Access (index into) an Array item
var last = fruits[fruits.length - 1];
fruits.indexOf('Apple');  // 0
fruits.indexOf('Pear');  // -1

fruits.forEach(function(item, index, array) {  // loop and array
  console.log(item, index);
});
// Apple 0
// Banana 1

var newLength = fruits.push('Orange'); // Add to the end of an Array
var last = fruits.pop()  // Remove from the end of an Array
var first = fruits.shift(); // Remove from the front of an Array
var newLength = fruits.unshift('Strawberry') // add to the front

fruits.splice(0, 1); // delete one item from index 0, ['Banana']
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
```

### [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// 12

to be continued...
```

### [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
like find, but return the index of an array  
to be continued...

### map
```
var a = [1, 2, 3];
const b = a.map(x => x*x);
console.log(b) [1, 4, 9]
```
