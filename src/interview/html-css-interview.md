---
title: HTMLCSS Interview Questions
stack: HTML CSS
slug: html-css
date: 2024-01-01 00:00:00 +0000
---

## 什么是 SEO，为什么 SEO 对于一个网站很重要

搜索引擎优化

- 门户网站靠自然搜索结果获取流量
- 使用关键字搜索是尽量提升自然排名，获取更多的流量

## 进行 SEO 的措施

- SSR 服务端渲染
- 准确的 TDK 描述
- 语义化的 HTML 元素，图片 alt，h1，h2 的合理使用
- 编写合理的 robots.txt 文件
- https
- 内部链接和外部链接

## defer 和 async 属性在 script 标签中分别有什么作用

浏览器在解析 HTML 的过程中，遇到 script 元素是不能继续构建 DOM 树的

- 停止继续构建，首先下载 JavaScript 代码，并且执行 JavaScript 的脚本
- 只有等到 JavaScript 脚本执行结束后，才会继续解析 HTML，构建 DOM 树

这么做的原因

- JavaScript 的作用之一就是操作 DOM，并且可以修改 DOM
- 如果等到 DOM 树构建完成并且渲染再执行 JavaScript 代码，会造成严重的回流的重绘，影响页面的性能

这样带来的问题

- 目前开发模式，脚本比 HTML 页面更重，处理时间更长
- 造成页面的解析阻塞，在脚本下载执行完成之前，用户在界面上什么都看不到

defer 的作用

defer 属性告诉浏览器不要等待脚本下载，而继续解析 HTML，构建 DOM tree

- 脚本由浏览器下载，但是不会阻塞 DOM 树的构建过程
- 脚本提前下载好了，会等待 DOM 树构建完成，在 DOMContentLoaded 事件之前先执行 defer 中的代码
- 多个带 defer 的脚本是可以保持正确的顺序执行的，而且推荐放到 head 元素中，提高页面性能

async 的作用

aysnc 是让一个脚本的下载和执行是独立的

- 浏览器不会因为 async 脚本的下载而阻塞
- async 脚本会在下载好后立即执行，不能保证在 DOMContentLoaded 之前还是之后执行，执行时会阻塞 DOM 树的构建
- async 脚本不能保证顺序，他是独立下载，独立运行，不会等待其他脚本

两者的应用场景

- defer 通常用于需要在文档解析后操作 DOM 的 JavaScript 代码，并且对多个 script 文件有顺序要求的
- async 通常用于独立的脚本，对其他脚本，甚至 DOM 没有依赖的脚本

## CSS3 的引入的主要特性

- 选择器
  - 新的属性选择器
  - 结构性伪类
- 背景和边框
  - 边框圆角 border-radius
  - 边框图片 border-image
  - 多重背景
- 文本效果
  - 文本阴影 text-shadow
  - 文本溢出 text-overflow
- 转换和动画
  - 2D 3D transform ，rotate，scale，skew
  - CSS 动画 ，animation

## 物理像素，逻辑像素， CSS 像素，像素密度

- 物理像素

  设备像素，显示屏幕的最小物理单位

- 逻辑像素

  设备独立像素

- DPR， device pixel ratio

  设备像素比

- CSS 像素

- DPI PPI

  每英寸的打印点数，打印领域

## 为什么要在移动端使用 2x，3x 的图片

媒体查询使用 resolution

## 什么时 1px 问题，如何画出 0.5px 边框

伪类加 transform

## 如何理解 BFC，如何创建 BFC

- 根元素
- 浮动元素
- 绝对定位元素
- 行内块级元素
- 表格
- overflow 不为 visible 的块级元素
- 弹性元素

特点

- 在 BFC 中，box 会在垂直方向上一个挨着一个的排布
- 垂直方向的间距的 margin 属性决定
- 在同一个 BFC 中，相邻两个 box 之间的 margin 会折叠
- 在 BFC 中，每个元素的左边缘是紧挨着包含快的左边缘的

解决的问题

- 解决 margin 折叠问题

  让他们属于不同的 BFC

- 解决浮动高度塌陷问题

  前提条件

  - 浮动元素的父元素触发 BFC，形成独立的块级格式化上下文
  - 浮动元素的父元素的高度的 auto

## 如何确保不同浏览器的兼容性

- 工程化的配置
- polyfiils
- 移动端
- caniuse
- 特定工程测试
-
