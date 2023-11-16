**Xiang Wang @ 2018-08-14 09:14:37**

[Standard built-in objects 内置对象][global-objects]
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

## [Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)

## [NumberFormat][NumberFormat]
```
new Intl.NumberFormat(
    'en-US',
    {notation: 'compact', maximumSignificantDigits: 4}
).format(123_000_0)  // 1.23M
```

## [Object API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* 删除一个key
```
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
delete myobj.a;
```  
* 获取keys
```
Object.keys(obj)
```

## [RegExp正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
[regexp guid][reg-guid]
* 创建一个正则表达式
```
var re = /ab+c/;  // js载入时就编译好了，速度快
var re = new RegExp('ab+c');  // 速度慢，但是里面的内容可变
```
* [使用特殊字符][Using-special-characters]
    * [ ] `\v`
    * `\w`: alphanumeric character(包括underscore) `[A-Za-z0-9_]`
    * `\W`: 和`\w`相反，匹配所有非数字字母下划线的字符
    * [ ] `\n`
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

## [Set][Set]
```
const mySet = new Set()
mySet.add(1)
mySet.add(5)
mySet.add(5)
for (let item of set) console.info(set)
```

## [String 字符串](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
### [Template literals 模板](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
```
`hello ${who}`
escape `<a>${who}</a>`
```
* [indexOf][string-indexOf]
    * Syntax
    ```
    str.indexOf(searchValue)
    str.indexOf(searchValue, fromIndex)  // fromIndex代表从哪个位置开始寻找，默认为0
    ```
    * 寻找一个字符串内出现了几次某个字母
    ```
    const str = 'To be, or not to be, that is the question.';
    let count = 0;
    let position = str.indexOf('e');

    while (position !== -1) {
      count++;
      position = str.indexOf('e', position + 1);
    }

    console.log(count); // displays 4
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
    如果正则表达式里面有括号，那么分割的信息也会显示在array里面。注意这个括号要是group的那种，不能是把几个符号合并的那种
    var myString = 'Hello 1 word. Sentence number 2.';
    // 比较这三者的区别
    myString.split(/\s*\d\s*/)
    ["Hello", "word. Sentence number", "."]
    myString.split(/(\s*\d\s*)/)
    ["Hello", " 1 ", "word. Sentence number", " 2", "."]
    myString.split(/\s*(\d)\s*/)
    ["Hello", "1", "word. Sentence number", "2", "."]
    ```

## [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
产生唯一的符号. 不过用在字典里会导致失效, 用变量名替换

[global-objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
[reg-guid]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[string-indexOf]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
[Using-special-characters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
[Set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[NumberFormat]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
