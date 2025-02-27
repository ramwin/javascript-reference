---
theme: seriph|default
background: ./image/
transition: fade-out|slide-left
layout: two-cols|center
layoutClass: gap-16
class: text-center
info: |
    |难道能换行?

level: 2 当前从多少级开始
title: 目录显示的名字
---

# 大标题

## 框架

* emoji: 🧑<200d>💻 

    <br>

点了我才出现
<v-click>
按键 <kbd>space</kbd>

表格可以用空格做成无标题
页面用[^1] 引用

<!-- 演讲备注 -->

<!-- footer -->
[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<!-- Inline style -->

<img initial enter />
<div
  v-motion
  :initial="{ x:35, y: 30, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.footnotes-sep {
  @apply mt-0 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

## 显示
v-after
`<div grid="~ cols-2 gap-2" m="t-2">`

## class样式
位置
absolute
-bottom-10
px-20

尺寸
w-80

显示
opacity-50
rotate-10

## 组件
目录
<Toc minDepth="1" maxDepth="3"></Toc>
箭头
<arrow v-click="[4, 5]" x1="350" y1="310" x2="195" y2="334" color="#953" width="2" arrowSize="1" />

<span v-mark.circle.orange="4">标记</span>

<img v-drag="'square'" src=/>

## 引入外部代码

`<<< @/snippets/external.ts#snippet`

## js代码
### twoslash
```ts twoslash
```

### magic-move
用<code> ````用来展示magic-move</code>
<code>
````md magic-move
```ts {*|2|*}
// step 1
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
```

```ts {*|1-2|3-4|3-4,8}
// step 2
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
```

```ts
// step 3
export default {
  data: () => ({
    author: {
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  })
}
```

Non-code blocks are ignored.

```vue
<!-- step 4 -->
<script setup>
const author = {
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
}
</script>
```
````
</code>
