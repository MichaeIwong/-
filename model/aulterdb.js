const db = require('./db.js')

module.exports = {
    query:db.query,
    insearSql:(obj,callback)=>{
        //sql的语句
        let insertSql = `INSERT INTO posts 
                        (title,content,slug,created,status,feature,user_id,category_id)
                        VALUES
                        ("${obj.title}","${obj.content}","${obj.slug}","${obj.created}","${obj.status}","${obj.feature}","${obj.user_id}","${obj.category_id}") `
        db.query(insertSql,(err,result)=>{
            callback(err,result)
        })
    }
}