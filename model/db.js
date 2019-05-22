const mysql = require('mysql')

module.exports.query = (sql,callback)=>{
    

    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'alibaixiu',
        multipleStatements: true // 允许 mysql 执行多条 sql 语句
    })
    //开启连接
    connection.connect()
    //执行命令
    connection.query(sql,(err,result)=>{
        if (err) {
            return callback(err,null)
            
        }
        callback(null,result)
    })
    //关闭连接
    connection.end()
}
