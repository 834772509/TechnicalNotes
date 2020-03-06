# **Java 笔记**

::: tip 说明
笔记中列出的方法是作者 常用的方法(尤其是构造方法) 和 了解的方法 所以并不完全. ^_^
:::

---

## **I/0流**
  
### **文件对象**

* 文件夹和文件都用File表示

``` Java
  //实例化的方法有多种 ,这里用作者最常用的方法 ^_^
  File f = new File("文件路径");
```

* 文件常用方法

``` Java
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

### **字节流**

:::tip
  注意: 因为大部分I/O流的读写方法基本一致,所以这里只在字节流说明其余的流不再说明  ^_^
:::

* 字节输入流

1. 构造方法

``` Java
  FileInputStream(File file)   //通过File对象来创建一个字节输入流
  FileInputStream(String name) //通过文件路径名创建一个字节输入流
```

2. 读方法

``` Java
  int read()   // 一次读取一个字节,返回 0 -255 范围内的 int 数，如果到达流末尾，则返回值 -1。
  int read(byte[] b)   //从输入流中读取一定数量的字节，并将其存储在缓冲区数组 b 中，以整数形式返回实际读取的字节数，如果到达流末尾，则返回值 -1。
```

* 字节输出流

1. 构造方法

``` Java
  FileOutputStream(File file)   //通过File对象来创建一个字节输出流
  FileInputStream(String name)  //通过文件路径名创建一个字节输出流
```

2. 写方法

``` Java
  public void write(int b)  //写一个字节, 写的ASCII字符
  void write(byte[] b)      //将 b.length 个字节从指定 byte 数组写入此文件输出流中。
```

---

### **字符流**

* 字符输入流

``` Java
  FileReader(File file)      //通过File对象来创建一个字符输入流
  FileReader(String name) //通过文件路径来创建一个字符输入流
```

* 字符输出流

``` Java
  FileWriter(File file) //通过File对象来创建一个字符输出流
  FileWriter(String name) //通过文件路径来创建一个字符输出流
```  

---  

### **其他流**

* 缓存流

```Java
  //带缓冲的字节输入/输出流
  BufferedInputStream
  BufferedOutputStream

  //带缓冲的字符输入/输出流
  BufferedWriter
  BufferedReader
```

:::tip  
  相关链接: [关于缓存流的用法](https://blog.csdn.net/qq_20610631/article/details/81113794)  
:::

* 数据流

```Java
  //数据输入/输出流
  DataInputStream
  DataOutputStream

```

:::warning  
  数据流必须成对使用,比如你是用 **DataOutputStream** 写入数据就必须用 **DataInputStream** 读取数据,否则会出现**EOFException**
  这相对当于是一种规则  
:::

* 对象流(序列化)

```Java
  ObjectInputStream
  ObjectOutputStream
```

:::tip  
  对于序列化的讲解 慕课网有相关的视频(进入见第六章) [点这里进入](https://www.imooc.com/learn/123)  
:::

---

### **读写文件的用法**

* 读取

``` Java
File file = new File("要读取的文本路径");
try( BufferedReader bReader = new BufferedReader(new FileReader(file))) {
  System.out.println(bReader.readLine());
  } catch (IOException e) {}
```

---

* 写入

``` Java
File file = new File("要写入的文本路径");
try {
  file.createNewFile();
  BufferedWriter bWriter = new BufferedWriter(new FileWriter(file));
  bWriter.write("要写入的文本");
  bWriter.flush();
  bWriter.close();
  } catch (IOException e) {}
```

:::tip  
  有没有发现 读取和写入的的try-catch方式不一样呢
  读取的try-catch方式是JDK7开始支持的写法 这种写法称为try-with-resources  
  所有的流，都实现了一个接口叫做 AutoCloseable，任何类实现了这个接口，都可以在try()中进行实例化。 并且在try, catch, finally结束的时候自动关闭，回收相关资源。  
  **友情提示:** 连接数据库的时候也可以这么写哦,避免使用完数据库忘记关闭连接,浪费资源.比如我自己 ^_^  
:::

---

## 常用Swing组件

### 窗口

``` Java
final JFrame 窗口1 = new JFrame();
窗口1.setLayout(new FlowLayout());
窗口1.setSize(500, 300);
窗口1.setLocation(500, 500);
窗口1.setTitle("窗口1");
窗口1.getContentPane().setBackground(Color.white);
窗口1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
窗口1.setVisible(true);
```

---

### 菜单

``` Java
JMenuBar 菜单栏 = new JMenuBar();
JMenu 菜单1 = new JMenu("菜单1");
JMenuItem 菜单项1 = new JMenuItem("菜单项1");
JMenuItem 菜单项2 = new JMenuItem("菜单项2");
菜单1.add(菜单项1);
菜单1.add(菜单项2);
菜单栏.add(菜单1);
窗口1.setJMenuBar(菜单栏);
```

---

### 弹出式菜单

``` Java
final JPopupMenu 弹出式菜单1 = new JPopupMenu();
JMenuItem 弹出式菜单项1 = new JMenuItem("弹出式菜单项1");
JMenuItem 弹出式菜单项2 = new JMenuItem("弹出式菜单项2");
弹出式菜单1.add(弹出式菜单项1);
弹出式菜单1.add(弹出式菜单项2);
final JButton 按钮_弹出菜单 = new JButton("弹出菜单");
按钮_弹出菜单.addActionListener(new ActionListener() {
  @Override
  public void actionPerformed(ActionEvent e) {
    弹出式菜单1.show(按钮_弹出菜单, 按钮_弹出菜单.getX(), 按钮_弹出菜单.getY());
    }
    });
    窗口1.add(按钮_弹出菜单);
```

---

### 标签

``` Java
JLabel 标签1 = new JLabel();
标签1.setText("标签1");
标签1.setFont(new Font("微软雅黑", 0, 14));
窗口1.add(标签1);
```

---

### 按钮

``` Java
JButton 按钮1 = new JButton();
按钮1.setText("按钮1");
按钮1.setPreferredSize(new Dimension(80, 30));
按钮1.setFont(new Font("微软雅黑", 0, 14));
按钮1.setBackground(new Color(0,131,238));
按钮1.setForeground(Color.white);
按钮1.setFocusPainted(false);
窗口1.add(按钮1);
按钮1.addActionListener(new ActionListener() {
  @Override
  public void actionPerformed(ActionEvent arg0) {
    JOptionPane.showMessageDialog(窗口1, "点击了按钮1", 窗口1.getTitle().toString() + " - 提示", JOptionPane.INFORMATION_MESSAGE);
    }
    });
```

---

### 图片框

``` Java
JLabel 图片框1 = new JLabel();
图片框1.setIcon(new ImageIcon("图片路径"));
图片框1.setPreferredSize(new Dimension(200, 100));
窗口1.add(图片框1);
```

---

### 文本域（可多行输入）

``` Java
JTextArea 文本域1 = new JTextArea();
文本域1.setBackground(Color.lightGray);
文本域1.setLineWrap(false);//设置不自动换行
文本域1.setPreferredSize(new Dimension(300, 100));
```

---

### 文本框（单行输入）

``` Java
JTextField 文本框1 = new JTextField();
文本框1.setBackground(Color.lightGray);
文本框1.setPreferredSize(new Dimension(300, 30));
窗口1.add(文本框1);
```

---

### 创建单选组

``` Java
ButtonGroup 单选组1 = new ButtonGroup();
JRadioButton 单选按钮1 = new JRadioButton("单选按钮1");
JRadioButton 单选按钮2 = new JRadioButton("单选按钮2");
单选按钮1.setBackground(Color.WHITE);
单选按钮2.setBackground(Color.WHITE);
单选组1.add(单选按钮1);
单选组1.add(单选按钮2);
单选按钮1.setSelected(true);//设置选中
窗口1.add(单选按钮1);
窗口1.add(单选按钮2);
```

::: tip 提示
ButtonGroup不是容器，所以要增加的是JRadioButton，不是ButtonGroup
:::

---

### 复选框

``` Java
JCheckBox 复选框1 = new JCheckBox("复选框1");
复选框1.setBackground(Color.WHITE);
窗口1.add(复选框1);
```

---

### 组合框

``` Java
JComboBox 组合框1 = new JComboBox();
组合框1.addItem("选项1");
组合框1.addItem("选项2");
组合框1.addItem("选项3");
组合框1.addItem("选项4");
组合框1.setBackground(Color.WHITE);
窗口1.add(组合框1);
```

---

## **JDBC**

:::tip  
  MySQL: [数据库的介绍](http://fir834772509.gitee.io/technicalnotes/back-end/SQL/)  
:::

### 创建连接

#### 直接的方式

```Java
  String url ="";  //不同的数据库版本连接方式不相同
  String user ="";  //用户名
  String password ="";  //密码

  try(
    Connection c = DriverManager.getConnection(url,user,password);
    Statement s = c.createStatement();
  ){
     //使用sql语句
  }catch(SQLException e){
    e.printStackTrace();
  }
```

#### 封装成类的方式

```Java
import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;

//连接数据库类
public class DBUtil {
    static String ip = "127.0.0.1";
    static int port = 3306;
    static String database = "数据库名称";
    static String encoding = "UTC";
    static String loginName = "用户名";
    static String password = "密码";


    public static Connection getConnection() throws SQLException{
        String url = String.format(
                "jdbc:mysql://%s:%d/%s?useSSL=FALSE&serverTimezone=%s",ip,port,database,encoding);  //这是一种 方便修改 这是8.0.12的连接方式
        //String url = ""; //这种用起来不方便修改
        return DriverManager.getConnection(url,loginName,password);
    }

}

```

#### 预编译的方式使用sql语句

```Java
  /*
  * 使用预编译的方式 要提前准备号sql语句
  * 使用try-with-resource的方式 省去手动关闭连接
  * 以插入为例
  */
  String sql = "insert into 表名(字段1,字段2,字段3) values(?,?,?)";
  try(
    //这里连接使用封装成类的方式
    Connection c = BDUtil.getConnection();  
     PreparedStatement ps = c.prepareStatement(sql);
  ){
    /*
    * 设置要插入的值 注意 这里的参数从1开始 不是从0开始
    * setXXXX(位置,值);  XXXX为你要插入的值对应的类型
    */  
    //举个例子  
      ps.setString(1, "字符串");
      ps.setFloat(2, 313.0f);
      ps.setInt(3, 50);
      //开始插入
      ps.execute();
  }catch(SQLException e){
    e.printStackTrace();
  }
```

### 执行sql语句(execute与executeUpdate的区别)

* 相同点:  
都可以进行 增 删 改

```Java
  //这里演示的是不使用预编译的方式执行sql语句
  Statement s = c.createStatement();
  //创建sql语句
  String sqlInsert = "insert into Hero values (null,'盖伦',616,100)";
  String sqlDelete = "delete from Hero where id = 100";
  String sqlUpdate = "update Hero set hp = 300 where id = 100";
  // 相同点：都可以执行增加，删除，修改
  s.execute(sqlInsert);
  s.execute(sqlDelete);
  s.execute(sqlUpdate);
  s.executeUpdate(sqlInsert);
  s.executeUpdate(sqlDelete);
  s.executeUpdate(sqlUpdate);
```

* 不同点:
  
  1. 不同点1:  
  execute()可以执行查询语句  
  然后通过getResultSet()把结果集取出来  
  executeUpdate()不能执行查询语句.

  2. 不同点2:  
  execute()返回boolean类型，true表示执行的是查询语句，false表示执行的是insert,delete,update等等  
  executeUpdate()返回的是int，表示有多少条数据受到了影响

```Java
  //可以使用executeQuery()语句来查询
  Statement s = c.createStatement()
  String sql = "select * from hero";
  // 执行查询语句，并把结果集返回给ResultSet
  ResultSet rs = s.executeQuery(sql);
```

### jdbc的特殊操作

* 获取自动ID

```Java
  //Statement.RETURN_GENERATED_KEYS参数是为了用于获取自增长id
  PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
  ResultSet rs = ps.getGeneratedKeys(); //获取结果集
  if(rs.next()){
    int id = rs.getInt(1);
  }
```

* 获取表的元数据

```Java
  /*  
  * 查看数据库层面的元数据
  * 数据库服务器版本
  * 驱动版本
  * 都有哪些数据库等等
  */
  DatabaseMetaData dbmd = c.getMetaData();
  // 获取数据库服务器产品名称
  dbmd.getDatabaseProductName()
  // 获取数据库服务器产品版本号
  dbmd.getDatabaseProductVersion()
  // 获取数据库服务器用作类别和表名之间的分隔符 如test.user
  dbmd.getCatalogSeparator()
  // 获取驱动版本
  dbmd.getDriverVersion()
  // 获取数据库名称
  ResultSet rs = dbmd.getCatalogs();
  while (rs.next()) {
    System.out.println("数据库名称:\t"+rs.getString(1));
  }
```

### 关于jdbc事务的介绍

  1. 前提: 表的类型必须是INNODB类型的  
  2. 为什么要使用事务: 当使用数据库进行多个操作时 如果某个操作失败 而其他操作成功 可能会引起数据库的数据错误,尤其是某个操作之间的联系非常紧密时,这是非常严重的.所以这时候就要使用 **事务**
  3. 什么是事务:  在进行多个操作时,如果这些操作都处于一个事务中,那么这些操作要么都成功,要么都失败.
  4. 怎么使用事务:  
      连接数据库成功后,关闭自动提交,改为手动提交.代码如下:

  ```java
    try (
          Connection c = BDUtil.getConnection();
          Statement s = c.createStatement();
        ) {
            // 有事务的前提下
            // 在事务中的多个操作，要么都成功，要么都失败
            //关闭自动提交
            c.setAutoCommit(false);
            //修改数据 比如血量加1
            String sql1 = "update 表名 set hp = hp +1 where id = 22";
            s.execute(sql1);
            // 在减1
            // 不小心写错写成了 updata(而非update)
            String sql2 = "updata hero set hp = hp -1 where id = 22";
            s.execute(sql2);
            // 手动提交
            c.commit();
            //因为sql2语句错误,提交失败;所以sql1语句也没有成功提交,这就是使用事务的好处
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
  ```

### ORM与DAO
  
* ORM
  1.先了解什么是"持久化":  
  持久（Persistence），即把数据（如内存中的对象）保存到可永久保存的存储设备中（如磁盘）。持久化的主要应用是将内存中的数据存储在关系型的数据库中，当然也可以存储在磁盘文件中、XML数据文件中等等。
  2.在了解什么是"持久层":  
  持久层（Persistence Layer），即专注于实现数据持久化应用领域的某个特定系统的一个逻辑层面，将数据使用者和数据实体相关联
* DAO

