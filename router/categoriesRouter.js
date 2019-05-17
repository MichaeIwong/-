const express = require('express')
const categoriesContr = require('../controller/categoriesContr.js')
const router = express()

//外置路由链式结构
router.get('/categories',categoriesContr.categories)//加载静态页面
        .get('/getAllData',categoriesContr.getAllData)//处理动态渲染数据路由
//暴露接口
module.exports = router