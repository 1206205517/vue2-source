## 源码笔记
- src\platforms\web\entry-runtime-with-compiler.js
入口文件 运行时编译


- src\platforms\web\runtime\index.js
定义一个path

- src\core\index.js
初始化全局api

- src\core\instance\index.js
Vue构造函数

render: 获取vdom
patch: 初始化/更新 vdom=> dom


### 整体流程
new Vue() => init() => $mount() => mountComponent() =>
new Watcher() => updateComponent() => render() => _update()

_update() 把虚拟dom变为真实dom
$mount()的作用：把虚拟dom变为真实dom(完成页面渲染)

Watcher 总裁秘书 服务目标$root

一个组件一个watcher