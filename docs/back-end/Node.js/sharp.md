# Sharp 图片处理

sharp 是 Node.js 平台上相当热门的一个图像处理库，可以方便地实现常见的图片编辑操作，如裁剪、格式转换、旋转变换、滤镜添加等。

## 安装

`npm install sharp`

## 基本使用

### 修改图片大小

```JavaScript
sharp("图片路径").resize(宽度, 高度).toFile("图片输出路径");
sharp("./bar.png").resize(100, 100).toFile("./baz.png");
```

### 转换 Buffer

```JavaScript
sharp("图片路径")
  .resize(宽度, 高度)
  .toBuffer()
  .then((data) => {
    fs.writeFile("图片输出路径", data, (err) => {
      console.log(err);
    });
  });
```
