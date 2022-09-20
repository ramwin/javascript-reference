## Array 数组 [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

### concat [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
把多个array或者item合并，生成一个新的array。是一个shadowcopy。
如果输入的参数是array，就把这个array复制添加到this的后面，如果不是array，就会直接把这个item push到后面. 但是这个不会迭代，只会判断一层
```
var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f']
var array3 = array1.concat(array2)
var array4 = array1.concat(array2, array3)  可以一次性concat几个array
```

### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
创建一个新的array
```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```
* 语法
> `var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])`

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

* [ ] shift

### [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
返回shallow copy浅拷贝
```
a = [1, 2, 3]
a.slice(-1)  [3]  // 支持负数
a.slice(1, 2) [2]  // end是可选项
```


### Array.some(function)
返回Array里面是否存在能通过function的元素

### Array.sort
排序。

### Array.splice(start[, deleteCount[, item1[, item2, itemN]]])
从start开始，删除deleteCount个数据。 并塞入剩余的参数
```
array.splice(2, 0, 'drum')  // 相当于 python 的 array.insert(2, 'drum')
array.splice(2, 1, 'drum')  // 相当与 array[2] = 'drum'
```

### unshift [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
把一个或者多个元素添加到数组头部，然后返回数据长度
```
>>> var array1 = [1, 2, 3]
>>> array1.unshift(4, 5)
4
>>> array1
[4, 5, 1, 2, 34]

```
