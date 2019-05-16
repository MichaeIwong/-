//引入文件
const userdb = require('../model/userdb.js')
const url = require('url')

module.exports = {
    //处理登录页面
    getUser : (req,res)=>{
        userdb.query(`SELECT*FROM users`,result=>{
            res.render('users',{result:result})
        })
    },

    //处理提交信息
    postUser:(req,res)=>{
 
        let data = req.body 
        let sql = `INSERT INTO users (email,slug, nickname, password, status) VALUES ('${data.email}','${data.slug}','${data.nickname}','${data.password}','activated')`
        userdb.query(sql,result=>{
            res.send({
                status:200,
                msg:'新增成功'
            })
        })
    },
    //处理数据加载
    getAllUser:(req,res)=>{
        let userSql = `SELECT*FROM users`
        userdb.query(userSql,result=>{
            res.send({
                status:200,
                data:result
            })
        })
    },
    //处理删除逻辑
    getDel:(req,res)=>{
        let id = req.query.id
        let delSql = `DELETE FROM users WHERE id=${id}`
        userdb.query(delSql,result=>{
            res.send({
                status:200,
                msg:'删除成功'
            })
        })
    }

}

//处理提交信息