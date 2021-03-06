const express = require('express')
const userContr = require('../controller/userContr.js')
const router = express.Router()

//统一验证

// router.use((req, res, next) => {
//     // 验证是否登录
//     if (req.session.user) {
//         next()
//     } else {
//         res.send('<script>alert("您还没有登录");window.location="/login"</script>')
//     }
// })

router.get('/users',userContr.getUser)//设置路由
        .post('/postUser',userContr.postUser)//处理提交信息
        .get('/getAllUser',userContr.getAllUser)//处理页面加载
        .get('/getDel',userContr.getDel)//处理删除路由
        .get('/getEdit',userContr.getEdit)//编辑内容处理路由
        .post('/updateUser',userContr.updateUser)//处理提交修改信息
        .post('/delUsersByIds',userContr.delUsersByIds)//根据选中id批量删除
        .get('/profile',userContr.profile)//加载个人中心页面
        .post('/postData',userContr.postData)//提交处理个人中心数据
        .get('/password-reset',userContr.getPassword)//加载修改密码页面
        .post('/postReset',userContr.postReset)//处理修改密码数据

//暴露接口
module.exports = router