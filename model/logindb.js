const db = require('./db.js')

module.exports = {
    query:db.query,

    loginSql:(email,callback)=>{
        let selSql = `SELECT password FROM users WHERE email = '${email}'`
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    }
}