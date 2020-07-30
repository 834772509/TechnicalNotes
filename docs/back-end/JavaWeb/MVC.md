# MVC

## 图解

![MVC三层架构](./img/MVC图解.png "MVC图解")

## M-Model-模型

- 业务处理: 业务逻辑(Service)
- 数据持久层:CRUD(DAO)

## V-View-视图

- 展示数据
- 提供链接发起 Servlet 请求

## C-Controller-控制器

- 接收用户的请求: request
- 交给业务层处理对应的代码
- 控制视图的跳转
