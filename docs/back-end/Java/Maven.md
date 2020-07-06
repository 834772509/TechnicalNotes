# Maven

## 下载

[Maven](https://maven.apache.org/download.cgi)

### 配置环境变量

```maven\bin```

### 配置淘宝镜像

maven\conf\settings.xml

``` XML
<mirrors>
  <mirror>
   <id>alimaven</id>
   <mirrorOf>central</mirrorOf>
   <name>aliyun maven</name>
   <url>https://maven.aliyun.com/nexus/content/groups/public</url>
   </mirror>
</mirrors>
```

### 配置本地仓库

``` XML
<localRepository>绝对路径\\Maven\\LocalWarehouse</localRepository>
```
