# Maven

## 下载

[Maven](https://maven.apache.org/download.cgi)  
[Maven 存储库](https://mvnrepository.com/)

### 配置环境变量

`maven\bin`

### 配置淘宝镜像

maven\conf\settings.xml

```XML
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

::: tip 提示
默认本地仓库路径为：`\Users\用户名\.m2`目录
:::

```XML
<localRepository>绝对路径\\Maven\\LocalWarehouse</localRepository>
```

## 使用

### 导入 Maven 库

::: tip 提示
Maven 库可在 [Maven 存储库](https://mvnrepository.com/) 中寻找并导入
:::

\pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <dependencies>
        <dependency>
            <groupId>项目组织唯一标识符</groupId>
            <artifactId>项目唯一标识符</artifactId>
            <version>版本号</version>
        </dependency>
    </dependencies>
</project>
```

### 解决静态资源导出失败

\pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <!--解决静态资源导出失败-->
    <build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
                <includes>
                    <include>**/*.properties</include>
                    <include>**/*.xml</include>
                </includes>
                <filtering>false</filtering>
            </resource>
        </resources>
    </build>
</project>
```
