# gulu UI —— 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/aman-tang/gulu.svg?branch=master)](https://travis-ci.org/aman-tang/gulu)

## 介绍

gulu 意为轱辘，车轱辘，即车轮。这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box：
  ```
  *, *::before, *::after {box-sizing: border-box;}

  ```
  IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #ccc;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式

2. 安装 vue-gulu
  ```
  npm i --save vue-gulu
  ```

3. 引入 vue-gulu
  ```
  import {Button, ButtonGroup, Icon} from 'vue-gulu'
  import 'vue-gulu/dist/index.css'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      'g-button': Button
    }
  }
  ```

4. 引入 svg symbols
  ```
  <script src="//at.alicdn.com/t/font_1015388_wl3omxehau.js"></script>
  ```



## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## gulu UI 有哪些轮子？
1. 按钮
2. 输入框
3. 网格
4. 布局
5. Toast
6. Tabs
7. Popover
8. 手风琴

> 注意：这些是计划中的轮子，更多还待更新...





