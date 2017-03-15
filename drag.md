#### Xiang Wang @ 2017-03-15 15:32:32

# 基础

## 属性
* draggable: true | false 元素是否可以拖拽

## dom事件
* ondragstart: 开始被拖拽
* ondragover: 拖拽到元素上面
* ondrop: 放置

## event属性
* event.dataTransfer  # 保存的数据
  * event.dataTransfer.setDate(key, value)  # 设置数据
  * event.dataTransfer.getData(key)  # 获取数据
