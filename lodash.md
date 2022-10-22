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
* 引入
```
import lodash from {lodash};
lodash.filter
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

#### [filter](https://lodash.com/docs/4.17.15#filter)
```javascript
list = [1, 2, 3, 4, 5]
lodash.filter(list, (res) => {return res%2===0})
// [2, 4]
lodash.filter(list, {key: 3})  // 找到key为3的
lodash.filter(list, 'key')  // 找到存在key并且key的值为true的
```

> 1. 返回的对象是引用。操作会导致原始数据改变
> 2. 

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

#### keyBy
一般用于把返回的列表变成dict来方便索引, 去重.
把collections根据条件生成key, 输出最后的dict
```javascript
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
```

#### flatMap
一般用于把每个元素的children汇总到一起
```javascript
lodash.flatMap([1, 2], (item)=>[item, item*3])
[1, 3, 2, 6]
lodash.flatMap(results, item=>{
    return lodash.map(
        item.children,
        childitem=>{
            childitem.pareent_id=item.id
            return childitem
        }
    )
})
```

#### map
```
> results = [{id: 1}, {id: 2}]
> lodash.map(results, "id")
[1, 2]
> lodash.map(results, (item) => {return item.id})
[1, 2]
```

#### reduce
一般用于汇总. 如果只有一个元素, 就会返回第一个元素
```javascript
lodash.reduce([1, 2, 3], function(result, next) {
    return result + result * next
})
s1 = 1
s2 = 1 + 1 * 2 = 3
s3 = 3 + 3 * 3 = 12
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

#### get
获取属性, 同时不会报错, 默认返回undefined
```javascript
var object = { 'a': [{ 'b': { 'c': 3 } }] };
lodash.get(object, 'a[0].b.c');
lodash.get(object, ["a", "0", "b", "c"], 56)  // 默认返回56
```

* mapKeys
把每个数据的key都处理一下

* mapValues
把每个数据的values处理一下
```
dict = { '1': [ 1, 1 ], '2': [ 2, 2 ] }
lodash.mapValues(dict, res=>{return res[1]})
// { '1': 1, '2': 2 }
```
