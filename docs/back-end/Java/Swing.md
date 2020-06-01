# 常用Swing组件

## 窗口

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

## 菜单

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

## 弹出式菜单

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

## 标签

``` Java
JLabel 标签1 = new JLabel();
标签1.setText("标签1");
标签1.setFont(new Font("微软雅黑", 0, 14));
窗口1.add(标签1);
```

---

## 按钮

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

## 图片框

``` Java
JLabel 图片框1 = new JLabel();
图片框1.setIcon(new ImageIcon("图片路径"));
图片框1.setPreferredSize(new Dimension(200, 100));
窗口1.add(图片框1);
```

---

## 文本域（可多行输入）

``` Java
JTextArea 文本域1 = new JTextArea();
文本域1.setBackground(Color.lightGray);
文本域1.setLineWrap(false);//设置不自动换行
文本域1.setPreferredSize(new Dimension(300, 100));
```

---

## 文本框（单行输入）

``` Java
JTextField 文本框1 = new JTextField();
文本框1.setBackground(Color.lightGray);
文本框1.setPreferredSize(new Dimension(300, 30));
窗口1.add(文本框1);
```

---

## 创建单选组

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

## 复选框

``` Java
JCheckBox 复选框1 = new JCheckBox("复选框1");
复选框1.setBackground(Color.WHITE);
窗口1.add(复选框1);
```
w
---

## 组合框

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
