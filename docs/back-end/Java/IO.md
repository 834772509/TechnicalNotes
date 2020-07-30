# I/0 流

## 文件对象

- 文件夹和文件都用 File 表示

```Java
  //实例化的方法有多种 ,这里用作者最常用的方法 ^_^
  File f = new File("文件路径");
```

- 文件常用方法

```Java
  f.exists()       //文件是否存在
  f.isDirectory()  //是否是文件夹
  f.isFile()       //是否是文件
  f.length()       //文件长度
  String sFile = f.getParent();    // 以字符串形式返回获取所在文件夹
  File pFile = f.getParentFile();  // 以文件形式返回获取所在文件夹
  f.mkdir();     // 创建文件夹，如果父文件夹skin不存在，创建就无效
  f.mkdirs();    // 创建文件夹，如果父文件夹skin不存在，就会创建父文件夹
  f.createNewFile();   // 创建一个空文件,如果父文件夹skin不存在，就会抛出异常
  f.getParentFile().mkdirs();    // 所以创建一个空文件之前，通常都会创建父目录
  f.listRoots();    // 列出所有的盘符c: d: e: 等等
  f.delete();   // 刪除文件
  f.deleteOnExit();   // JVM结束的时候，刪除文件，常用于临时文件的删除
  String[] strFile = f.list();    // 以字符串数组的形式，返回当前文件夹下的所有文件（不包含子文件及子文件夹）
  File[]fs= f.listFiles();    // 以文件数组的形式，返回当前文件夹下的所有文件（不包含子文件及子文件夹）
```

---

## 字节流

:::tip
注意: 因为大部分 I/O 流的读写方法基本一致, 所以这里只在字节流说明其余的流不再说明 ^\_^
:::

### 字节输入流

构造方法

```Java
  FileInputStream(File file)   //通过File对象来创建一个字节输入流
  FileInputStream(String name) //通过文件路径名创建一个字节输入流
```

读方法

```Java
  int read()   // 一次读取一个字节,返回 0 -255 范围内的 int 数，如果到达流末尾，则返回值 -1。
  int read(byte[] b)   //从输入流中读取一定数量的字节，并将其存储在缓冲区数组 b 中，以整数形式返回实际读取的字节数，如果到达流末尾，则返回值 -1。
```

### 字节输出流

构造方法

```Java
  FileOutputStream(File file)   //通过File对象来创建一个字节输出流
  FileInputStream(String name)  //通过文件路径名创建一个字节输出流
```

写方法

```Java
  public void write(int b)  //写一个字节, 写的ASCII字符
  void write(byte[] b)      //将 b.length 个字节从指定 byte 数组写入此文件输出流中。
```

---

## 字符流

- 字符输入流

```Java
  FileReader(File file)      //通过File对象来创建一个字符输入流
  FileReader(String name) //通过文件路径来创建一个字符输入流
```

- 字符输出流

```Java
  FileWriter(File file) //通过File对象来创建一个字符输出流
  FileWriter(String name) //通过文件路径来创建一个字符输出流
```

---

## 其他流

### 缓存流

```Java
  //带缓冲的字节输入/输出流
  BufferedInputStream
  BufferedOutputStream

  //带缓冲的字符输入/输出流
  BufferedWriter
  BufferedReader
```

:::tip 提示
相关链接: [关于缓存流的用法](https://blog.csdn.net/qq_20610631/article/details/81113794)  
:::

### 数据流

```Java
  //数据输入/输出流
  DataInputStream
  DataOutputStream
```

:::warning  
 数据流必须成对使用, 比如你是用 **DataOutputStream** 写入数据就必须用 **DataInputStream** 读取数据, 否则会出现**EOFException**
这相对当于是一种规则  
:::

### 对象流(序列化)

```Java
  ObjectInputStream
  ObjectOutputStream
```

:::tip 提示
对于序列化的讲解 慕课网有相关的视频(进入见第六章) [点这里进入](https://www.imooc.com/learn/123)  
:::

---

### 读写文件的用法

- 读取

```Java
File file = new File("要读取的文本路径");
try( BufferedReader bReader = new BufferedReader(new FileReader(file))) {
  System.out.println(bReader.readLine());
  } catch (IOException e) {}
```

---

- 写入

```Java
File file = new File("要写入的文本路径");
try {
  file.createNewFile();
  BufferedWriter bWriter = new BufferedWriter(new FileWriter(file));
  bWriter.write("要写入的文本");
  bWriter.flush();
  bWriter.close();
  } catch (IOException e) {}
```

:::tip 提示
读取的 try-catch 方式是 JDK7 开始支持的写法 这种写法称为 try-with-resources  
所有的流，都实现了一个接口叫做 AutoCloseable，任何类实现了这个接口，都可以在 try()中进行实例化。 并且在 try, catch, finally 结束的时候自动关闭，回收相关资源
:::

:::tip 提示
连接数据库的时候也可以这么写，避免使用完数据库忘记关闭连接，浪费资源
:::
