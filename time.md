## 字符串变成时间
    new Date();  // 获取当前时间
    var time2 = new Date(3000);  // 从标准时间到现在的时间, 但是这个是localhost的
    console.log(time2);
    var time3 = new Date('2016-09-13T07:55:16.742Z');
    console.log(time3);


## 时间计算
    time = moment(100);  // 会变成 08:00:01
    time = moment.utc(1000);  // 会变成 00:00:01
  

## 时间转字符串
    date.toISOString()  "2016-09-16T16:00:00.000Z"
