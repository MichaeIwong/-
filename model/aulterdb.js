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
    },
    selData: (option, callback) => {

        let selSql =``;
        //查询posts列表信息
        selSql += `SELECT posts.*,users.nickname,categories.name FROM posts `
        //数据表联动
        selSql += `LEFT JOIN users ON posts.user_id = users.id LEFT JOIN categories ON posts.category_id = categories.id WHERE 1=1 `
        let addSql = ``;
        if (option.cate && option.cate !=0) {
            addSql+=`and posts.category_id = ${option.cate} `
        }
        if (option.sta && option.sta !=0) {
            addSql+=`and posts.status = "${option.sta}" `
        }
        selSql += addSql
        //列表排序
        selSql += `ORDER BY posts.id DESC LIMIT ${(option.page - 1) * option.pagesize},${option.pagesize}; `
        //查询列表总数
        selSql += `SELECT count(*) FROM posts WHERE 1=1 `
        selSql += addSql
        // console.log(selSql);
        
        db.query(selSql, (err, result) => {
            callback(err, result)
  
        })
    },
    selSet:(id,callback)=>{
        let selSql = `SELECT*FROM posts WHERE id = ${id};SELECT*FROM categories `
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    },
    upSet:(obj,callback)=>{
        let sql = `UPDATE posts SET title = '${obj.title}',slug='${obj.slug}',content='${obj.content}',category_id='${obj.category}',created='${obj.created}',status='${obj.status}',feature='${obj.img}' WHERE id = ${obj.id}`
        db.query(sql,(err,result)=>{
            callback(err,result)
        })
    }
}