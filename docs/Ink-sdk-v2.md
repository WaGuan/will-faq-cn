---
id: ink-sdk-v2
title: WILL SDK for ink v2
---

## WILL 2.0数据文件是否包含压力数据？

WILL 2.0文件中没有记录压力数据。

SDK的工作方式如下：

**_PressurePathBuilder_**

输入（包含x，y和压力）--->传递到PressurePathBuilder --->产生输出（包含X，Y和大小）--->输出保存在.will文件中。

**_SpeedPathBuilder_**

输入（包含x，y和时间戳）--->传递给SpeedPathBuilder --->产生输出（包含X，Y和Size）--->输出保存在.will文件中

在这两种情况下，输出看起来都是相同的，并且既不包含压力也不包含时间戳值。

将数据从压力/时间戳转换为大小的操作是不可逆的，并且无法从文件中获取压力信息。

---

## Web教程: 显示黑屏

很可能您正在尝试从文件系统访问教程。浏览器将引发安全异常，因为墨水引擎会加载本地资源。

#### 解决方案

推荐的解决方案是在Web环境中执行示例。您需要一个简单的http服务器。

在示例文件夹中，您可以执行：
```
     python -m SimpleHTTPServer 8080
```

这是无需任何配置即可启动服务器的最简单方法。 然后在 http://localhost:8080 下访问它。

另一种解决方案是告诉浏览器跳过安全限制。

**注意** 不建议使用此解决方案，因为修改后的浏览器设置以后可能会成为安全问题。

#### 在Mozilla Firefox下
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 将security.fileuri.strict_origin_policy参数设置为false。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 为此，请在地址栏中输入**about:config**，然后搜索该参数。

#### 在Google Chrome下
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 使用以下参数启用可执行文件:  
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    **_chrome --allow-file-access-from-files_**

## Web教程: 处理WILL文件

由于Web体系结构的特殊性，因此不支持WILL文件内容。

从文件中获取信息的唯一方法是提取其内容。

#### 解决方案

虽然Web SDK不支持WILL文件格式，但它提供了InkEncoder和InkDecoder类，它们可以访问文件中的protobuf数据。

有关文件结构的更多信息，请参见[WILL File Format](/sdk-for-ink/)

另外，我们强烈建议您从下载的SDK中找到示例程序查看2.2（笔画序列化）。

---