# 整合 Dubbo

Apache Dubbo 是一款高性能、轻量级的开源Java RPC 框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。

## RPC

RPC 【Remote Procedure Call】是指远程过程调用，是一种进程间通信方式，它是一种技术的思想， 而不是规范。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即程序员无论是调用本地的还是远程的函数，本质上编写的调用代码基本相同。  

也就是说两台服务器A、B，一个应用部署在A服务器上，想要调用B服务器上应用提供的函数/方法，由于不在一个内存空间，不能直接调用，需要通过网络来表达调用的语义和传达调用的数据。为什么要用RPC呢？就是无法在一个进程内， 甚至一个计算机内通过本地调用的方式完成的需求，比如不同的系统间的通讯，甚至不同的组织间的通讯，由于计算能力需要横向扩展，需要在多台机器组成的集群上部署应用。RPC就是要像调用本地的函数一样去调远程函数;

## 环境搭建

### Zookeeper

注册中心

* 下载 [Zookeeper](https://zookeeper.apache.org/releases.html)
* 将 ``\conf\zoo_sample.cfg`` 文件复制一份，并命名为 ``zoo.cfg``
* 运行 ``\bin\zkServer.cmd``

::: tip 提示
Zookeeper默认会占用8080端口，请保持8080端口空闲或更改默认端口
:::

### Dubbo-Admin

为了让用户更好的管理监控众多的 dubbo 服务，官方提供了一个可视化的监控程序 dubbo-admin，不过这个监控即使不装也不影响使用。

* [下载Dubbo-Admin](https://github.com/apache/dubbo-admin)
* 进入 Dubbo-Admin 目录后，执行 ``mvn clean package -Dmaven.test.skip=true`` 打包
* 执行 \dubbo-admin-server\target 下的 dubbo-admin-0.0.1-SNAPSHOT.jar 【注意：zookeeper 的服务一定要打开】
* 访问 ``http://localhost:7001``，默认用户名和密码均为``root``

