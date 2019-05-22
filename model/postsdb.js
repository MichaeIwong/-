const db = require('./db.js')

module.exports = {
    query:db.query,
    selData:(page,pagesize,callback)=>{
        //执行的sql语句
        let selSql = `SELECT posts.*,users.nickname,categories.name FROM posts LEFT JOIN users ON posts.user_id = users.id LEFT JOIN categories ON posts.category_id = categories.id ORDER BY posts.id DESC LIMIT ${(page-1)*pagesize},${pagesize};
                        SELECT count(*) FROM posts`
                        // console.log(selSql);
                        
        db.query(selSql,(err,result)=>{         
            callback(err,result)

        })
    }
}