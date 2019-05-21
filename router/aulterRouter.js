const express = require('express')
const aulterContr = require('../controller/aulterContr.js')
const router = express.Router()

router.get('/post-add',aulterContr.postAdd)
        .post('/postText',aulterContr.postText)


//暴露路由
module.exports = router