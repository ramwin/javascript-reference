**Xiang Wang @ 2018-08-14 09:14:37**

[Standard built-in objects 内置对象][1]
## [Array 数组](array.md), [官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
## [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* 示例代码
```
new Date();  // 获取当前时间
var time2 = new Date(3000);  // 从标准时间到现在的时间, 但是这个是localhost的
console.log(time2);
var time3 = new Date('2016-09-13T07:55:16.742Z');
console.log(time3);
console.log(time3.toISOString()) "%y-%m-%dT%H:%M:%S.000Z"这种格式
```
* 注意事项
    * 月份是从0开始计算的，但是日期是从1开始计算的
    * Date(2013, 13, 1) 和 Date(2014, 1, 1) 等价。类似的如果秒也是这样，那也等价
* Methods
    * Date.now()  // 1520395758500

## [Object API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* 删除一个key
```
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
delete myobj.a;
```  

## [RegExp正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
[regexp guid][reg-guid]
* 创建一个正则表达式
```
var re = /ab+c/;  // js载入时就编译好了，速度快
var re = new RegExp('ab+c');  // 速度慢，但是里面的内容可变
```
* 使用括号
```
var re = /(\d+)(\w+)/
re.exec('123abc')[1] == '123'
re.exec('123abc')[2] == 'abc'
```

* Syntax 语法:
```
/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])
/ab+c/i;
new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');
```

* Examples 示例
```
'123fea'.replace(/\d+/, 'd')
# change data format
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);
# use regular expression to split lines
var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```

## [String 字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* Template literals 模板
```
`hello ${who}`
escape `<a>${who}</a>`
```
* [Split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
> str.split([separator[, limit]])
    * separator  
    > The separator can be string or regular expression, if it is `space`, no split will happen (different from python)
    * limit  
    > limit the number of splits to be found. only return the first `limit` items. (different from python. in python the limit means after `limit` times split, the rest world will not split and return a a whole world)
    * return  
    > return an `Array` or strings
    * Example
    ```
    var namelist = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
    var re = /\s*;\s*/
    var namelist = names.split(re);

    // If separator is regular expression that contains capturing parentheses (), matched results are included in array
    var myString = 'Hello 1 word. Sentence number 2.';
    var splits = myString.split(/(\d)/);
    console.log(splits);
    ```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[reg-guid]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
