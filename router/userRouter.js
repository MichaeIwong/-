const express = require('express')
const userContr = require('../controller/userContr.js')
const router = express.Router()

//设置路由
router.get('/users',(req,res)=>{
    userContr.getUser(req,res)
})

//处理提交信息
router.post('/postUser',(req,res)=>{
    userContr.postUser(req,res)
})

//处理页面加载
router.get('/getAllUser',(req,res)=>{
    userContr.getAllUser(req,res)
})

//处理删除路由
router.get('/getDel',(req,res)=>{
    userContr.getDel(req,res)
})

//暴露接口
module.exports = router