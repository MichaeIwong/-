const express = require('express')
const userContr = require('../controller/userContr.js')
const router = express.Router()


router.get('/users',userContr.getUser)//设置路由
        .post('/postUser',userContr.postUser)//处理提交信息
        .get('/getAllUser',userContr.getAllUser)//处理页面加载
        .get('/getDel',userContr.getDel)//处理删除路由
        .get('/getEdit',userContr.getEdit)//编辑内容处理路由
        .post('/updateUser',userContr.updateUser)//处理提交修改信息
        .post('/delUsersByIds',userContr.delUsersByIds)//根据选中id批量删除

//暴露接口
module.exports = router