# classNames

## 安装

``npm install classnames --save``

## 使用

``` js
import classNames from 'classnames';


{/* 传入字符串 */}
<h2 className={classNames("类名", "类名")}></h2>
{/* 传入对象 */}
<h2 className={classNames({ "类名": 布尔值,"类名": 布尔值 })}></h2>
{/* 字符串、对象混合 */}
<h2 className={classNames("类名",{ "类名": 布尔值 })}></h2>
{/* 传入数组 */}
<h2 className={classNames(["类名","类名"])}></h2>
```
