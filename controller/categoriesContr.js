const categoriesdb = require('../model/categoriesdb.js')

module.exports = {
    //处理静态页面
    categories:(req,res)=>{
        res.render('categories',{})
    },
    
    //渲染动态数据资源
    getAllData :(req,res)=> {
        let selSql = `SELECT*FROM categories`
        categoriesdb.query(selSql,(err,result)=>{
            // console.log(result);
            if(err) {
                res.send({
                    status:400,
                    msg:'出错了'
                })
                return
            }
            res.send({
                status:200,
                msg:'加载完成',
                data:result
            })
            
        })
    }

}