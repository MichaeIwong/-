//开启服务器
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const userRouter = require('./router/userRouter.js')
const categoriesRouter = require('./router/categoriesRouter.js')
const slidesRouter = require('./router/slidesRouter.js')

//创建服务器对象
const app = express()


// 配置 ejs 模板引擎
app.set('views', './views') // 设置模板引擎的静态页面
app.set('view engine', 'ejs') // 设置渲染模板使用的引擎

//配置bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//引入路由
app.use(userRouter)
app.use(categoriesRouter)
app.use(slidesRouter)

//加载静态资源
app.use('/assets',express.static('./assets'))
app.use('/static/uploads',express.static('./uploads'))

//开启服务器
app.listen(3000,()=>{
    console.log('running');
    
})