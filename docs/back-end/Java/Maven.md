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
   <url>http://maven.aliyun.com/nexus/content/groups/public</url>
   </mirror>
</mirrors>
```