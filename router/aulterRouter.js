const express = require('express')
const aulterContr = require('../controller/aulterContr.js')
const router = express.Router()

router.get('/post-add',aulterContr.postAdd)//加载页面资源
        .post('/postText',aulterContr.postText)//完成数据提交
        .get('/posts',aulterContr.getPosts)//加载页面数据
        .get('/getPostsData',aulterContr.getPostsData)//处理页面数据
        .get('/post-edit',aulterContr.post_edit)//加载修改页面
        .get('/getSetData',aulterContr.getSetData)//获取修改的数据
        .post('/postSetData',aulterContr.postSetData)//处理提交的数据


//暴露路由
module.exports = router