**Xiang Wang @ 2015-11-23 18:56:23**

[火狐官方文档][官网]  
[对象基础][对象基础文档]  


# [Guide](guide导览.md)

# [内置对象](./build_in_objects内置对象.md)
Standard built-in objects 

* [Array数组](./array.md)
* Boolean
*返回一个数的布尔值*
0, -0, null, false, Nan, undefined, ""会变成false, 其他都是true(包括`{}`和`[]`)
* Date

## [Math][Math]
* [Math.floor][Math.floor]  
返回的是小于等于这个数字的最大整数
```
Math.floor(null) = 0;
Math.floor(-5.05) = -6;
```
返回一个数字的divmod, 不支持负数
```
var quotient = Math.floor(y/x);
var remainder = y % x;
```
* [Math.round](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)  
只能返回一个整数,和python不同

## [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [isInteger](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) 返回一个数字是不是整数
```
Number.isInteger(0.1)  // false
Number.isInteger("10")  // false
Number.isInteger([1])  // false
Number.isInteger(0)  // true
```

* Object
* ## [RegExp](./build_in_objects内置对象.md)
* [String](./build_in_objects内置对象.md#String)

# [操作符号，表达式][expression]
Expressions and operators 

* [in][in]  
you must use index instead of value for a list, so the `in` operator means has property or not, it doesn't means the object contains the item
  ```
  obj = {'key': 'value'}
  'key' in obj  // true
  list = ['a', 'b', 'c']
  1 in list  // true
  3 in list  // false
  'a' in list  // false
  ```

## [逻辑操作][逻辑操作]  
Logical Operators 
* `&&` and
* `||` or
* `!` not

## [执行顺序 *Operator precedence*][执行顺序]
* 20. (...)
* 16. ! ...
* 12. ... < ...
* 11. != !== == ===
* 6. ... && ...
* 5. ... || ...


# [语法](statements_and_declarations语法.md)
*Statements & declarations*

* do...while
这个和while相比, 能保证执行一次.
```
    do {
    } whilte (condition);
```
* ## const
* ## continue
* ## for
* ## [for of](./statements_and_declarations语法.md#for...of)
* ## for in
* ## function
* ## switch
* ## try...catch

# [Functions函数](./functions函数.md)

# [Misc]  
待处理

# [webapi](./webapi/README.md)

## [Element](./webapi/element.md)

## [GlobalEventHandlers](./webapi/README.md)
* ### onkeydown

## WebSocket API

## Window
* properties
    * location *返回一个Location对象*
        * 访问新的页面: location = "https://www.mozilla.org";
        * 刷新页面 location.reload(true);
* Methods
    * [confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
    ```
    result = window.confirm(message);
    if (result) {
        ...
    }
    ```
* Events

## 其他
# [webapi](https://developer.mozilla.org/en-US/docs/Web/API)
* [WindowOrWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope)
    * [ ] caches
    * [ ] indexedDB
    * [ ] isSecureContext
    * [ ] origin
    * [ ] atob
    * [ ] btoa
    * [ ] clearInterval: `scope.clearInterval(intervalID)`
    * [ ] clearTimeout
    * [ ] createImageBitmap()
    * [ ] fetch()
    * [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
        ```javascript
        function happy() {
            console.log("");
        }
        var intervalID = window.setInterval(happy, 500)
        ```
    * [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)  
        setTimeout return an timeoutId(integer), it share the same id with setInterval. The clearTimeout() and clearInterval() can technicaly be used interchangebaly.
        * Syntax: `var timeoutId = scope.setTimeout(function, delay, param1, param2, ...)`
        * Example: `timeoutId = window.setTimeout(window.alert, 2000, 'That was relly slow!');`
* scroll滚动
    * 滚动到页面底部后更新  
    ```
        $(window).scroll(function() {
           if($(window).scrollTop() + $(window).height() +1 >= $(document).height()) {
               user_list_vm.show_more();
           }
        });
    ```

# 第三方包
## [Axios](https://github.com/axios/axios)

```
const axios = require('axios');
axios.get(
  '/user', {
    params: {
      staff: true
    }
  })
  .then(function(response) {
  })
axios.post('/user', data)
    .then(function(response) {
    })
    .catch(function(error) {
    })
```

## [Lodash](https://lodash.com/docs/)
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
### Function
* debounce
调用一个函数，这个函数必须要是多少秒之内没有被调用过的
```
_.debounce(func, [wait=0], [options={}])
// 返回一个func, 之后调用这个新生成的func
// 避免window的尺寸in flux的时候变化
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
```
### Math
* sumBy 根据某个字段求和
```
_.sumBy(array, function(item) { return item.value}
```

## [Moment](https://momentjs.com/)
```
const moment = require("moment")
var m = moment(new Date())
m.format("YYYY-MM-DD")  // 生成的是m的时区的日期. 通过m.utcOffset(0)可以修改时区. 默认为当前时区
```
Parse, validate, manipulate, and display dates and times in JavaScript.
### [Document](https://momentjs.com/docs/)
* example
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment-with-locales.min.js"></script>
<script>
  var now = moment(new Date())
  console.log(now.format("YYYY-MM-DD"))
  console.log(now.add(12, 'days').calendar());
  moment("20111031", "YYYYMMDD")
</script>
```
#### Get and Set time
```
let now = moment()
noe.hours(12).minutes(0).seconds(0)
```
* [manipulating](https://momentjs.com/docs/#/manipulating/)  
    It should be noted that moments are mutable. Calling any of the manipulation methods will **change** the original moment.
    * add: `moment().add(7, 'days|d|weeks|w|months|M|years|y')`
#### 计算时间
```
moment().add(7, 'days')
moment().subtract(7, 'days')
```
#### 展示时间
```
moment().format()  //  "2014-09-08T08:02:17-05:00"
moment().format("YYYY-MM-DD HH:mm:ss") 
```

#### durations
```
moment(moment.now() - moment.duration(2, 'hours'))
moment.substract(2, 'hours')  // 但是这样原来的时间就丢失了
```

# node
## [modules](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html)
```
// animal.js
class Cat {
    constructor(name) {
        this.name = name
    }
    function say() {
        console.info(`miao: ${this.name}`)
    }
}
module.exports = {
    Cat
}
exports.Cat = Cat
exports.Cat = class Cat {...}
// run.js
const animal = require('./animal.js')
var cat =animal.Cat('kitty')
cat.say()
```
## vue的模块或者组件
```
Cat.vue
export default {
}
import Cat from "./Cat"
```

# [npm](https://docs.npmjs.com/)
```
npm config set registry https://registry.npm.taobao.org
npm config set registry https://registry.npmjs.org/
```
## [命令](https://docs.npmjs.com/cli-documentation/)
* [install](https://docs.npmjs.com/cli-commands/install.html)
```
npm install --save  // 以前的npm需要用save来自动修改package.json. 现在不需要这个参数了
```


* [install](https://docs.npmjs.com/cli/v6/commands/npm-install)
```
npm install -P|--save-prod  # 添加到dependencies
npm install -D|--save-dev  # 添加到devDependencies
```

* [shrinkwrap](https://docs.npmjs.com/cli/v6/commands/npm-shrinkwrap)
锁定版本

## npm-link-save
## [npm-link-better](https://github.com/laggingreflex/npm-link-better)
```
npm-link-better vue
```


[官网]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[对象基础文档]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[Math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[Math.floor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
[expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
[in]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[逻辑操作]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

[执行顺序]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
