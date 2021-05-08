# ele-vue2.52
> vue2.52 还原饿了么app

## Build Setup

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080 服务地址
npm run dev

# build for production with minification 产品打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> For myself
### 2021.4.25
1. 前期项目准备
 - 图标,图片,数据或接口,技术框架...
  + svg图标引用 https://icomoon.io/
 - 初始化css (网上下载的[normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css))
2. vue cli 搭建项目
 - 安装vue cli
  + npm install -g @vue/cli
 - 创建项目
  +  vue create ele-vue1.0
	+  或者vue ui //图形化界面创建vue ui
3. mock本地假数据
 - 在npm run dev编译入口文件 `webpack.dev.conf.js`中配置
 ```js
let appData = require('../data.json')
let seller = appData.seller
let goods = appData.goods
let ratings = appData.ratings
app.use('api',apiRoutes)
 ```
  - 在devServer下增加before方法引用
	```js
	before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      }),
      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        })
      }),
      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
	```

4.安装依赖
 - css预处理器 stylus安装
  + `npm install -D stylus-loader stylus`
	 - 安装成功,但是报错,google后是版本太高问题
	+ 在package.json的dependencies依赖中 新增指定版本`"stylus-loader": "^3.0.2",`
 - 安装使用vue-router
  + ing...

---

### 2021.4.26
1.安装vue-router //路由
 + `npm install vue-router`
2.配置router
 + 新建router.js文件或文件夹.. 在入口文件main.js中导入相应的js文件,并挂载到app实例上
 ```js
 ...
import router from './router'  //这里是新建router文件夹下有一个index.js文件

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
 ```
 + 配置index.js路由文件
  - 导入vue-router,通过Vue.use()方法明确安装路由功能，配置一个goods路由
  ```js
  import Vue from 'vue'
  import Router from 'vue-router'
  import goods from '../components/goods/goods'

  Vue.use(Router)

  export default new Router({
    routes: [
      {
        path: '/goods',
        name: 'goods',
        component: goods
      }
    ]
  })
  ```
  + build>webpack.base.conf.js 文件中配置快捷路径
  ```js
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'components': path.resolve(__dirname,'../src/components')
    }
  ```
  + 初始加载goods模块
  ```js
  {path: '*',redirect: '/goods'}
  ```
  + 更改默认添加的class属性
  ```js
  new Router({linkActiveClass:"active"})
  ```
  3. 手机端查看(手机和电脑要在同一局域网内)
   - 查询电脑ip地址,命令行ipconfig
   - 将localhost替换为ip地址,复制网址到草料网站生成二维码

  ---

### 2021.4.27
1. axios 
 - 安装 `npm install -s axios vue-axios`
 - 配置
 ```js
 import axios from 'axios'
 import VueAxios from 'vue-axios'
 Vue.use(VueAxios,axios)
 ```

2. inline-block间距问题
 - 设置font-size：0;

### 2021.4.28
1. 样式
  - sticky footer
2. 评星系统...

### 2021.4.29
1. `backdrop-filter`元素背景模糊


<!-- 五一期间回老家 -->
### 2021.5.6
1. 多行文本垂直居中
 - display:table
 - display:table-cell vertical-aglin:middle
2. 移动端固定高度实现内滚动

### 2021.5.7
1. [better-scroll](https://github.com/ustbhuangyi/better-scroll) 插件实现屏内滚动
 - 安装 `npm install better-scroll -S`
 - 引用 `import BScroll from 'better-scroll'`
 - 使用 (操作dom)
  + ```js
      let bs = new BScroll('.wrapper', {
      movable: true,
      zoom: true
      })
    ```
    
### 2021.5.8
1. 商家详情页
2. 购物车
3. 评价页