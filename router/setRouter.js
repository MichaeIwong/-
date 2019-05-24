const express = require('express')
const setContr = require('../controller/setContr.js')
const router = express.Router()

router.get('/nav-menus',setContr.nav_menus)//加载导航菜单页面
    .get('/getNavData',setContr.getNavData)//动态获取数据资源
    .post('/addNavData',setContr.addNavData)//提交数据
    .get('/delNav',setContr.delNav)//删除数据
    .get('/delNavAll',setContr.delNavAll)//批量删除

//暴露路由
module.exports = router