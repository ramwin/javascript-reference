## Lodash
[官网](https://lodash.com/docs/)
### 基础
*一致性、模块化、高性能的 JavaScript 实用工具库。*
[测试](test/lodash.html)
* 安装
```
<script src="https://cdn.bootcss.com/lodash.js/4.17.11/lodash.min.js"></script>
var _ = require("lodash");
_.filter
```
### Array
* difference
找到a里面才存在的元素
```
a = [1, 2, 3]
b = [2, 3, 4]
_.difference(a, b)  // [1]
```

### Collection
* every
```
_.every([tru, 1, null, 'yes'], Boolean)
_.every([User1, User2], {'active': true})
_.every([User1, User2], ['active', true])
```
* find
```
_.find(array|object, {id: 1})
```

* flatten
```
> results = [
    1, 
    [2, [3, [4]], 5],
]
> lodash.flatten(results)
[1, [2,[3,[4]]], 5]
```
* flatMap
把一个列表里的每个元素的children都拿出来
```
> results = [
    {children: [1,2,3]},
    {children: [4,5,6]},
]
> lodash.flatMap(results, (item) => {return item.children})
[1, 2, 3, 4, 5, 6]
```
* groupBy
把数组根据一定的规律变成 { type0: sublist, type1: sublist}
```
_.groupBy([6.1, 4.2, 6.3], Math.floor);
_.groupBy(['one', 'two', 'three'], 'length');
```

* keyBy
把collections根据条件生成key, 输出最后的dict
```
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
```
* map
```
> results = [{id: 1}, {id: 2}]
> lodash.map(results, "id")
[1, 2]
> lodash.map(results, (item) => {return item.id})
[1, 2]
```


### Function
* debounce
调用一个函数，这个函数必须要是多少秒之内没有被调用过的
```
_.debounce(func, [wait=0], [options={}])
// 返回一个func, 之后调用这个新生成的func
// 避免window的尺寸in flux的时候变化
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
```

### Lang
* clone
* cloneDepp
复制对象

### Math
* sumBy 根据某个字段求和
```
_.sumBy(array, function(item) { return item.value}
```

### Object
* mapValues
把每个数据的values处理一下
```
dict = { '1': [ 1, 1 ], '2': [ 2, 2 ] }
lodash.mapValues(dict, res=>{return res[1]})
// { '1': 1, '2': 2 }
```
