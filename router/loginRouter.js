const express = require('express')
const loginContr = require('../controller/loginContr.js')
const router = express.Router()
// 添加一个得到登录页面的路由
router.get('/login',loginContr.login)
        .post('/loginByEmail',loginContr.loginByEmail)// 添加一个提交登录数据的路由
        .get('/logout',loginContr.logout)//添加点击退出事件

//暴露路由
module.exports = router