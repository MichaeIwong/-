// const mysql = require('mysql')

// module.exports.query = (sql,callback)=>{
    

//     let connection = mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'root',
//         database:'alibaixiu'
//     })
//     //开启连接
//     connection.connect()
//     //执行命令
//     connection.query(sql,(err,result)=>{
//         if (err) {
//             return callback(err,null)
            
//         }
//         callback(null,result)
//     })
//     //关闭连接
//     connection.end()
// }

const db = require('./db.js')

module.exports = {
    query:db.query,
    //处理页面加载内容
    selAllSql:(callback)=>{
        let selSql = `SELECT*FROM categories`
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    },
    //处理新增数据
    addSql:(params,callback)=>{
        let addSql = `INSERT INTO categories (name,slug)VALUES ('${params.name}','${params.slug}')`
        db.query(addSql,(err,result)=>{
            callback(err,result)
        })
    },
    //处理编辑界面的内容
    selSql:(id,callback)=>{
        let selSql = `SELECT*FROM categories WHERE id=${id}`
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    },
    //处理编辑提交的数据
    updSql:(params,callback)=>{
        let updSql = `UPDATE categories SET name='${params.name}',slug='${params.slug}' WHERE id = ${params.id}`
        db.query(updSql,(err,result)=>{
            callback(err,result)
        })       
    },
    //处理删除信息
    delSql:(id,callback)=>{
        let delSql = `DELETE FROM categories WHERE id=${id}`
        db.query(delSql,(err,result)=>{
            callback(err,result)
        })
    },
    //处理批量删除信息
    delAllSql:(idStr,callback)=>{
        let delAllSql = `DELETE FROM categories WHERE id in (${idStr})`
        db.query(delAllSql,(err,result)=>{
            callback(err,result)
        })
    }
    

}