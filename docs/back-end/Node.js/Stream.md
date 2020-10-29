# Stream 流

## Readable

流的方式读取文件

### 基本使用

```JavaScript
const fs = require("fs");

const reader = fs.createReadStream("文件路径", {
  start: 起始位置,
  end: 终止位置,
  highWaterMark: 每次最大读取长度,
});

// 读取数据
reader.on("open", () => {
  console.log("文件被打开");
});

reader.on("data", (data) => {
  console.log(data);

  // 暂停读取
  reader.pause();
  // 恢复读取
  reader.resume();
});

reader.on("close", () => {
  console.log("文件被关闭");
});
```

## writable

流的方式写出文件

```JavaScript
const fs = require("fs");

const writer = fs.createWriteStream("文件路径", {
  flags: "flag选项",
  start: 起始写入位置,
});

writer.write("内容", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

// 关闭文件
writer.end();
```

### flag 选项

- w : 打开文件写入，默认值；
- w+ : 打开文件进行读写，如果不存在则创建文件；
- r+ : 打开文件进行读写，如果不存在那么抛出异常；
- r : 打开文件读取，读取时的默认值；
- a : 打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；
- a+ : 打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

## pipe

```JavaScript
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream("./foz.txt");

reader.pipe(writer);
writer.close();
```
