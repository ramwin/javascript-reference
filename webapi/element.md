**Xiang Wang @ 2019-04-17 10:31:20**

### classList
`read only`, 返回一个`DOMTokenList`
* 案例
```
$("#title").classList.toggle("active");
```

### className

### [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)
#### properties
#### Methods
* ##### [toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
如果存在这个class, 就删除这个class, 返回false
如果不存在，就添加这个class, 返回true
    * 语法  
    ```
    tokenList.toggle(token, force)
    ```
    如果force存在，表明这个toggle是单向操作。true代表只能被添加，不能被移除，false代表只能被移除，不能被添加
    * 案例
    ```
    var span = document.querySelector("span");
    var classes = span.classList;
    span.onclick = function() {
      var result = classes.toggle("c");
      if(result) {
        span.textContent = "'c' added; classList is now '" + classes + "'.";
      } else {
        span.textContent = "'c' removed; classList is now '" + classes + "'.";
      }
    }
    ```


### to be continue
