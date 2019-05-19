const express = require('express')
const slidesContr = require('../controller/slidesContr.js')
const router = express.Router()

//加载静态页面
router.get('/slides',slidesContr.getSlides)

//暴露接口
module.exports = router