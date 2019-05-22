const express = require('express')
const postsContr = require('../controller/postsContr.js')
const router = express.Router()

router.get('/posts',postsContr.getPosts)//加载页面数据
    .get('/getPostsData',postsContr.getPostsData)//处理页面数据
    .post('/postChange',postsContr.postChange)//提交筛选数据
//暴露路由
module.exports = router