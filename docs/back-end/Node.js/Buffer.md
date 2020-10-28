# Buffer

## 基本概念

### Buffer

Buffer 相当于是一个字节的数组，数组中的每一项对于一个字节的大小：

## 创建 Buffer

- from 方式创建

  ```JavaScript
  // UTF-8编码
  Buffer.from("内容");
  // 指定编码
  Buffer.from("内容", "utf16le");
  ```

- alloc 方式创建

  ```JavaScript
  const buffer名 = Buffer.alloc(8);
  buffer[0] = 88;
  buffer[1] = 0x88;
  ```

### Buffer 解码

```JavaScript
// UTF-8编码
console.log(buffer.toString());
// 指定编码
console.log(buffer.toString("编码"));
```
