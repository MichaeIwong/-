const setdb = require('../model/setdb.js')
module.exports = {
    //加载导航菜单页面
    nav_menus :(req,res)=>{
        let nickname = req.session.user.nickname
        let avatar = req.session.user.avatar
        res.render ('nav-menus',{nickname,avatar})

    },
    //加载数据资源
    getNavData: (req,res)=>{
        setdb.selNav((err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'加载成功',
                data:result[0]
            })
        })
    },
    //处理提交的数据
    addNavData:(req,res)=>{
        let params = req.body
        params.icon = 'fa fa-fire'
        setdb.addNav(params,(err,result)=>{
            if (err) {
                console.log(err);
                
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
    //删除点击的数据内容
    delNav:(req,res)=>{
        let index = req.query.id
        console.log(index);
        setdb.delNav(index)
        setdb.delNav(index,(err,result)=>{
            if (err) {
                return res.send({
                    status:'400',
                    msg:'出错了'
                })
            }
            res.send({
                status:200,
                msg:'删除成功'

            })
        })
    },
    //批量删除数据内容
    delNavAll:(req,res)=>{
        let params =req.query.id
        // console.log(params);
        setdb.delAll(params,(err,result)=>{
            if(err) {
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
    }
}