# Pinia

## 什么是 Pinia？

Pinia（发音为/piːnjʌ ʌ/，如英语中的“peenya”）是最接近 piña（西班牙语中的菠萝）的词；

- Pinia 开始于大概 2019 年，最初是作为一个实验为 Vue 重新设计状态管理，让它用起来像组合式 API（Composition API）。
- 从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容 Vue2、Vue3，也并不要求你使用 Composition API；
- Pinia 本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和 Vuex、Redux 一样）；

### Pinia 和 Vuex 的区别

那么我们不是已经有 Vuex 了吗？为什么还要用 Pinia 呢？

- Pinia 最初是为了**探索 Vuex 的下一次迭代**会是什么样子，结合了**Vuex 5 核心团队**讨论中的许多想法；
- 最终，团队意识到**Pinia 已经实现了 Vuex5 中大部分内容**，所以最终**决定用 Pinia 来替代 Vuex**；
- 与 Vuex 相比，Pinia 提供了一个**更简单的 API，具有更少的仪式**，提供了**Composition-API 风格的 API**；
- 最重要的是，在**与 TypeScript 一起使用时具有可靠的类型推断支持**；
  和 Vuex 相比，Pinia 有很多的优势：
- 比如 mutations 不再存在：
  - 他们经常被认为是 _非常冗长_；
  - 他们最初带来了 devtools 集成，但这不再是问题；
- **更友好的 TypeScript 支持，Vuex 之前对 TS 的支持很不友好；**
- **不再有 modules 的嵌套结构**：
  - 可以灵活使用每一个 store，它们是通过扁平化的方式来相互使用的；
- **也不再有命名空间的概念，不需要记住它们的复杂关系；**

## 安装

`npm install pinia`
