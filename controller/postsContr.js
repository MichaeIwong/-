const postsdb = require('../model/postsdb.js')

module.exports = {
    //加载页面数据
    getPosts:(req,res)=>{
        let avatar = req.session.user.avatar
        let nickname = req.session.user.nickname
        res.render('posts',{avatar,nickname})
    },
    //处理页面动态数据
    getPostsData:(req,res)=>{
        let page = req.query.page
        let pagesize = req.query.pagesize
        postsdb.selData(page,pagesize,(err,result)=>{
            if (err) {
                return res.send('<script>alert("' + err.message + '")</script>')
            }
            res.send({
                status:200,
                msg:'加载成功',
                data:result
            })
        })
    },
    //处理提交的筛选数据
    postChange:(req,res)=>{
        let params = req.body
        console.log(params);
        
    }
}