//引入文件
const userdb = require('../model/userdb.js')
const url = require('url')
const formidable = require('formidable')
const path = require('path')

module.exports = {
    
    //处理管理页面
    getUser : (req,res)=>{
        if (isLogin(req,res)){
            return
        }
        
        
        let nickname = req.session.user.nickname
        let avatar = req.session.user.avatar
        
        userdb.query(`SELECT*FROM users`,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.render('users',{result:result,nickname,avatar})
        })
    },

    //处理提交信息
    postUser:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let data = req.body 
        let sql = `INSERT INTO users (email,slug, nickname, password, status) VALUES ('${data.email}','${data.slug}','${data.nickname}','${data.password}','activated')`
        userdb.query(sql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'新增成功'
            })
        })
    },
    //处理数据加载
    getAllUser:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let userSql = `SELECT*FROM users`
        userdb.query(userSql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'加载成功'
            })
        })
    },
    //处理删除逻辑
    getDel:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let id = req.query.id
        let delSql = `DELETE FROM users WHERE id=${id}`
        userdb.query(delSql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'删除成功'
            })
        })
    },
    //处理编辑内容
    getEdit:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let id = req.query.id
        let selSql = `SELECT*FROM users WHERE id = ${id}`
        userdb.query(selSql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'加载成功',
                data:result
            })
        })
        
    },

    //处理提交的修改信息
    updateUser:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let params  = req.body

        let upSql = `UPDATE users SET email='${params.email}', nickname='${params.nickname}', password='${params.password}' WHERE id=${params.id}`
        userdb.query(upSql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'处理成功'
            })
        })
    },

    //批量删除选中的内容
    delUsersByIds:(req,res)=>{
        if(isXhrLogin(req,res)) {
            return
        }
        let ids = req.body
        // console.log(ids);
        let idStr = ids.id.join(',')
        // console.log(idStr);
        let delSql = `DELETE FROM users WHERE id in (${idStr})`
        userdb.query(delSql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'删除成功'
            })
        })
        
        
    },
    //加载个人中心页面
    profile:(req,res)=>{
        let id = req.session.user.id
        userdb.profile(id,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            // console.log(result);
            
            res.render('profile',result[0])
        })
       
    },
    //处理个人中心提交的数据
    postData:(req,res)=>{
        let form = new formidable.IncomingForm()
        
        let imgPath = path.join(__dirname,'../uploads')  
        //设定上传的路径  
        form.uploadDir = imgPath
        //保留路径
        form.keepExtensions = true
        form.parse(req,(err,fields,files)=>{
            if (err) {
                return res.send({
                    status:304,
                    msg:'出错了'
                })
            }
            //判断图片是否存在
            if(files.img) {
                //保留图片最后的路径名
                let name = path.basename(files.img.path)
                fields.img = `/static/uploads/`+name
            }
            // console.log(fields);
            //修改session的内容
            req.session.user.nickname = fields.nickname
            req.session.user.avatar = fields.img

            userdb.updataSql(fields,(err1,result)=>{     
                if (err1) {
                    return res.send({
                        status:400,
                        msg:'修改不成功'
                    })
                }
                res.send({
                    status:200,
                    msg:'修改成功'
                })
            })
            
        })
    }

}

//异步对象登录处理
function isXhrLogin (req,res) {
    if (!req.session.user) {
         res.send({
            status:304,
            msg:'还没登录'
        })
        return true
    }
    return false
}
//页面加载登录判断
function isLogin (req,res) {
    if (!req.session.user) {
        return res.send('<script>alert("还没登录");window.location="/login"</script>')
    }
}