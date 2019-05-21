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
//             return console.log(err);      
//         }
//         callback(result)
//     })
//     //关闭连接
//     connection.end()
// }

const db = require('./db.js')

module.exports = {
    query:db.query,
    // selAllSql:(callback)=>{
    //     let selSql = `SELECT*FROM categories`
    //     db.query(selSql,(err,result)=>{
    //         callback(err,result)
    //     })
    // }
    profile:(id,callback)=>{
        let selSql = `SELECT * FROM users WHERE id =${id}`
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    },
    updataSql:(obj,callback)=>{
  
        let upSql = `UPDATE users SET slug = '${obj.slug}', nickname = '${obj.nickname}', avatar = '${obj.img}', bio = '${obj.bio}' WHERE id = ${obj.id}`
        db.query(upSql,(err,result)=>{
            callback(err,result)
        })
    }
}