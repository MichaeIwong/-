const db = require('./db.js')

module.exports = {
    query:db.query,

    loginSql:(email,callback)=>{
        //登录成功提取密码,昵称和id
        let selSql = `SELECT password,nickname,id,avatar FROM users WHERE email = '${email}'`
        
        
        db.query(selSql,(err,result)=>{
            callback(err,result)
            
        })
    }
}