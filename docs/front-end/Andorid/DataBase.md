# 数据库

## 数据类型

* null : NULL 值
* integer : 带符号的整数，根据值的大小存储在 1、2、3、4、6 或 8 字节中
* real : 浮点值，存储为 8 字节的 IEEE 浮点数字
* text : 文本字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储
* blob :  blob 数据，完全根据它的输入存储

## 创建数据库

``` Kotlin
class MyDatabaseHelper(val context: Context, name: String, version: Int) :
    SQLiteOpenHelper(context, name, null, version) {

    private val createDB = "create table 表名 (" +
"字段名 数据类型," +
"字段名 数据类型)"

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {

    }

    override fun onCreate(db: SQLiteDatabase) {
        db.execSQL(createDB)
        Toast.makeText(context, "数据库创建完成", Toast.LENGTH_SHORT).show()
    }
}
```

``` Kotlin
val dbHelper = MyDatabaseHelper(this, "数据库名.db", 版本号)
```

## 增加数据

``` Kotlin
contentValuesOf("" to "")
val db = dbHelper.writableDatabase
val values = ContentValues().apply {
    // 组装数据
    put("字段名", "值")
    put("字段名", "值")
}
//增加数据
db.insert("表名", null, values) 
Toast.makeText(this, "数据增加成功", Toast.LENGTH_SHORT).show()
```

## 删除数据

``` Kotlin
var db = dbHelper.writableDatabase
db.delete("表名", "字段名=?", arrayOf("值"))
Toast.makeText(this, "已删除字段名为“值“的数据", Toast.LENGTH_SHORT).show()
```

## 查询数据

``` Kotlin
var db = dbHelper.writableDatabase
//查询表中的所有数据
var cursor = db.query("表名", null, null, null, null, null, null)
if (cursor.moveToFirst()) {
    do {
        var 字段名 = cursor.getString(cursor.getColumnIndex("字段名"))
        var 字段名 = cursor.getInt(cursor.getColumnIndex("字段名"))
        Log.d("数据库查询", "字段名：$字段名")
    } while (cursor.moveToNext())
}
cursor.close()
```

## 执行SQL语句

### 增加数据

``` Kotlin
db.execSQL("insert into 表名 (字段名,字段名) values (?,?)",arrayOf("值","值"))
```

### 更新数据

``` Kotlin
db.execSQL("update 表名 set 字段名=? where 字段名=?",arrayOf("值","值"))
```

### 删除数据

``` Kotlin
db.execSQL("delete from 表名 where 字段名=?",arrayOf("值"))
```

### 查询数据

``` Kotlin
val cursor = db.rawQuery("select * from 表名",null)
```
