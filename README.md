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
2. vue cli 搭建项目
 - 安装vue cli
  + npm install -g @vue/cli
 - 创建项目
  + 1. vue create ele-vue1.0
	+ 2. vue ui //图形化界面创建vue ui
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

### 2021.4.26