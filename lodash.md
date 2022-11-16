### 基础
[官网](https://lodash.com/docs/)
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

#### difference
找到a里面才存在的元素
```
a = [1, 2, 3]
b = [2, 3, 4]
_.difference(a, b)  // [1]
```

#### differenceBy
找到id不一样的
```
_.differenceBy([{"x": 2}, {"x": 1}], [{"x": 1}], "x");
>> [{"x": 2}]
```

#### intersection
把多个array重复的取出来

#### intersectionBy
把多个array根据(例如id)条件一致的取出来

#### uniq
```
_.uniq([2, 1, 2])
[2, 1]
```

#### uniqBy
```
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
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

#### find
```
_.find(array|object, {id: 1})
返回id为1的对象
```

#### findIndex
```
_.find(array, {id: 1})
返回id为1的对象所在的index
```

#### flatten
```
> results = [
    1, 
    [2, [3, [4]], 5],
]
> lodash.flatten(results)
[1, [2,[3,[4]]], 5]
```

#### flatMap
把一个列表里的每个元素的children都拿出来

* 拿到所有子元素
```
> results = [
    {children: [1,2,3]},
    {children: [4,5,6]},
]
> lodash.flatMap(results, (item) => {return item.children})
[1, 2, 3, 4, 5, 6]
```

* 拿到所有子元素, 并对他们复制parent
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

#### groupBy
把数组根据一定的规律变成 { type0: sublist, type1: sublist}
```
_.groupBy([6.1, 4.2, 6.3], Math.floor);
_.groupBy(['one', 'two', 'three'], 'length');
```

#### includes
判断一个元素是否在collections
```
_.includes({ 'a': 1, 'b': 2 }, 1);
// => true
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

* isEqual
默认情况下array的比较和object的比较都是false
可以比较对象和array

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

#### has
判断属性是否存在
```javascript
a = {'key': 'bar', 'foo': 'see', 'deep': {'a': 'b'}}
lodash.has(a, 'key')  // true
lodash.has(a, 'deep.a')  // true
```

#### keys
返回Object的属性, 注意会把int变成string

* mapKeys
把每个数据的key都处理一下

* mapValues
把每个数据的values处理一下
```
dict = { '1': [ 1, 1 ], '2': [ 2, 2 ] }
lodash.mapValues(dict, res=>{return res[1]})
// { '1': 1, '2': 2 }
```

#### values
返回所有的value
