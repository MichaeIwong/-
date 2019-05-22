const express = require('express')
const aulterContr = require('../controller/aulterContr.js')
const router = express.Router()

router.get('/post-add',aulterContr.postAdd)//处理页面资源
        .post('/postText',aulterContr.postText)//完成数据提交


//暴露路由
module.exports = router