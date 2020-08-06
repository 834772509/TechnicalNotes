# Material Design

## Toolbar

顶部工具栏

```XML
<androidx.appcompat.widget.Toolbar
  android:id="@+id/Toolbar"
  android:layout_width="match_parent"
  android:layout_height="?attr/actionBarSize"
  android:background="@color/colorPrimary"
  android:theme="@style/ThemeOverlay.AppCompat.ActionBar"
  app:popupTheme="@style/ThemeOverlay.AppCompat.Light"
  tools:ignore="MissingConstraints" />
```

```Java
Toolbar = (Toolbar) findViewById(R.id.Toolbar);
setSupportActionBar(Toolbar);
```

## 侧边栏

```XML
<?xml version="1.0" encoding="utf-8"?>
<androidx.drawerlayout.widget.DrawerLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/drawerLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent">


    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <androidx.appcompat.widget.Toolbar
            android:id="@+id/Toolbar"
            android:layout_width="match_parent"
            android:layout_height="?attr/actionBarSize"
            android:background="?attr/colorPrimary"
            android:theme="@style/ThemeOverlay.AppCompat.Dark.ActionBar"
            app:popupTheme="@style/ThemeOverlay.AppCompat.Light"
             />

    </FrameLayout>

    <TextView
        android:layout_gravity="start"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="#fff"
        android:text="Hello World!"
        android:textSize="30sp"
        />

</androidx.drawerlayout.widget.DrawerLayout>
```

## NavigationView

侧边栏

\app\build.gradle

```gradle
dependencies {
    implementation 'com.google.android.material:material:1.0.0'
    implementation 'de.hdodenhof:circleimageview:3.0.1'
}
```

```XML
<com.google.android.material.navigation.NavigationView
  android:id="@+id/navView"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:layout_gravity="start"
  app:menu="@menu/nav_menu"
  app:headerLayout="@layout/nav_header"
/>
```

\menu\nav_menu

```XML
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <!--设置所有菜单为单选-->
    <group android:checkableBehavior="single">
        <item
            android:id="@+id/ID名称"
            android:icon="@drawable/图标名"
            android:title="标题">
          </item>
    </group>
</menu>
```

```Java
//设置侧边栏
NavigationView navView = findViewById(R.id.navView);
navView.setCheckedItem(R.id.navCall);
navView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
  @Override
  public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
    Toast.makeText(MainActivity.this, "按下了菜单", Toast.LENGTH_SHORT).show();
    drawerlayout.closeDrawer(GravityCompat.START);
    //返回true表示此事件已处理
    return true;
  }
});
```
