# 埋点

## 预置事件

1. $click
2. $pageview

预置事件可以通过配置自动开启。
也可以调用方法手动开启。

## 属性

### 全局非埋点属性

```txt
$ev    # Event 事件
$vid   # VisitorId 访问者id
```

以 $ 开头的属性都为原有预置属性，为了便于区分，请在添加额外预置属性时，属性名不要以 $ 开头。

### 全局预置属性

```txt
$st       # sdk 类别，值为 web
$sv       # sdk 版本
$lg       # 浏览器语言
$pf       # 平台
$os       # 系统
$ov       # 系统版本
$br       # 浏览器品牌
$bv       # 浏览器版本
$eg       # 浏览器引擎
$ev       # 浏览器引擎版本
$tt       # 页面 title
$url      # 页面 url
$path     # 页面 path
```

### $click 事件预置属性

```txt
$el_tag     # 元素 tag
$el_id      # 元素属性 id
$el_name    # 元素属性 name
$el_cls     # 元素属性 class
$el_href    # 元素属性 href
$el_ct      # 元素内容，最多85个字符
$el_sel     # 元素选择器
$page_x     # 点击的页面x轴坐标
$page_y     # 点击的页面y轴坐标
```

### $pageview 事件预置属性

```txt
$ref # 来源页面
```

## Methods

### init(options)

```js
// 初始化方法

// options
{
  // 数据源服务地址，必填
  dsn: '',
  // 发送方式: beacon, image，默认beacon
  send_type: 'beacon',
  // 是否自动收集页面浏览事件，默认开启
  pageview_auto_trace: true,
  // 是否自动收集点击事件，默认开启
  click_auto_trace: true,
  // 收集包含有特定属性的元素的点击
  click_attr_trace: [],
  // 收集包含有特定类名的元素的点击
  click_class_trace: [],
  // 是否开启收集兜底事件触发元素的点击，默认不开启
  click_target_trace: false,
  // 是否开启调试
  debug: false,
  // 访问者ID，一般用于调试或者绑定用户ID
  vid: '',
};
```

### trace(eventName, payload, callback)

```js
// 发送自定义事件

// eventName 事件名称
// payload 额外的信息负载
// callback 事件的回调函数
```

### traceClick(event, payload)

```js
// 手动触发$click事件

// event 点击时的事件对象
// payload 额外的信息负载
```

### tracePageview(payload)

```js
// 手动触发spa应用$pageview事件

// payload 额外的信息负载
```

### addPresetState(name, value)

```js
// 添加额外的全局预置属性
// name 预置属性名称
// value 预置属性值
```

### setVisitorId(id)

```js
// 设置访问者ID，一般用于调试或者绑定用户ID
```

## 自动收集 $click 点击事件介绍

只收集从事件 target 向父级查找最多10层元素；
默认 $click 点击事件遵循以下规则，优先级依次递减。

1. contenteditable, input, textarea 元素
2. a 元素
3. 包含特定 attr, class 的元素
4. cursor 属性值为 pointer 的元素
5. button 元素
6. click_target_trace: true 时点击事件的 target 元素

注意：

1. 不收集 body html 元素的点击事件
2. click_target_trace: true 表示每次点击都会有兜底的 target 元素，作为点击信息上报元素。

## example

示例内的 burypoint.es.js 由工程生成，如需要运行示例，复制最新的 burypoint.es.js 到示例项目。
