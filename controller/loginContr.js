const logindb = require('../model/logindb.js')

module.exports={
    //加载页面数据
    login:(req,res)=>{
        res.render('login',{})
    },
    //根据提交的数据判断登录条件
    loginByEmail:(req,res)=>{
        let params = req.body
        // console.log(params);
        logindb.loginSql(params.email,(err,result)=>{
            // console.log(result);
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            if (result.length == 0) {
                return res.send({
                    status:401,
                    msg:'邮箱或者密码错误'
                })
            }
            if(result[0].password!=params.pwd) {
                return res.send({
                    status:4002,
                    msg:'密码错误'
                })
            }
            //存储session值
            req.session.user={
                email:params.email,
                password:params.pwd
            }
            res.send({
                status:200,
                msg:'登录成功'
            })
            
        })
        
    }
}