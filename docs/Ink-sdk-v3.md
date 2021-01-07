---
id: ink-sdk-v3
title: WILL SDK for ink v3
---

## WILL 2.0和3.0之间的区别

WILL 2.0和3.0之间有什么区别？是否有迁移指南？

#### 答

Windows平台的WILL 2基于asm.js(http://asmjs.org/faq.html)。  
用于展示墨迹的底层技术是 WebGL。  
Module.js是一个包装器，其目的是采用asm.js并使用纯JavaScript代码扩展其功能。  
WILL 2的最新版本是 v.2.1.0.

Windows平台的WILL 3是基于ECMA6的纯JavaScript库。  
用于展示墨迹的底层技术是 2D.  
WebGL也适用于绘画应用中使用的复杂工具  
WILL 3 大大降低了画布交互的复杂性，并且是2D上下文的扩展-它只是添加了墨迹功能。 

在WILL 2和3之间没有迁移指南，因为WILL 3提供了全新的概念对于路径构建和技术。  
渲染基元几乎相同，但数据格式完全不同。  
如果需要，可以使用从WILL 2到WILL 3数据文件的转换器。

WILL 3有几种分发方式：

* wacom-digital-ink.js - UMD 分发方式 - 
  用于CDN导入或捆绑。  
	对于捆绑，需要进行其他配置-存在本机依赖关系，应将其从捆绑软件中排除。

* wacom-digital-ink-esm.js - ECMA6 分发方式
  这与导入/导出语句一起使用（下一个版本名称将更新为wacom-digital-ink.mjs）

* wacom-digital-ink-cjs.js - CommonJS 构建 
  这与NodeJS env兼容（下一个版本名称将更新为wacom-digital-ink.cjs）

* wacom-digital-ink.cjs.mjs  
	为NodeJS提供ECMA6

The package should be available in npm repository one day (depending on legal authorisation).该软件包将会在npm存储库中可用（取决于法律授权）。

WILL 3还没有教程或示例，但是提供了一个演示应用程序（基于CDN语法）和API文档。  
The demo app provides the basic concepts of Vector and Raster inking.该演示应用程序提供了墨迹的矢量图和位图的基本概念。 
可在以下位置找到该资源：https://github.com/Wacom-Developer/sdk-for-ink-web 

您可以在此处访问演示应用程序：https://will3-web-ink-demo.azurewebsites.net

工具配置器应用程序：

对于WILL 2，请参考 https://developer-demos.wacom.com/ToolConfigurator

对于WILL 3，请参见 http://ink-designer.trafficmanager.net/

这提供了许多新功能。路径构建功能强大得多，并且路径点几何图形的配置处理更加精确。 

WILL 3附带倾斜支持和控制，与路径构建相关的所有内容。  
WILL 2仅支持可变大小和Alpha颜色通道-在WILL 3中可以更改许多属性。
---