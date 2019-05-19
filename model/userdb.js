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

}