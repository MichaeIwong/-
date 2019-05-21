const formidable = require('formidable')
const path  = require('path')
const aulterdb = require('../model/aulterdb.js')
module.exports={
    postAdd:(req,res)=>{//得到写文章的页面资源
        let nickname = req.session.user.nickname
        let avatar = req.session.user.avatar
        res.render('post-add',{nickname,avatar})
    },
    postText:(req,res)=>{
        let form = new formidable.IncomingForm()
        //设置图片上传路径
        form.uploadDir=path.join(__dirname,'../uploads')
        //保留图片后缀
        form.keepExtensions=true
        form.parse(req,(err,fields,files)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'出错了'
                })
            }
            //用一个对象存储数据
            let obj = {
                title:fields.title,
                content:fields.content,
                slug:fields.slug,
                category:fields.category,
                created:fields.created,
                status:fields.status,
                user_id:req.session.user.id,
                category_id:fields.category
            }
            if (files.feature) {
                imgUrl = path.basename(files.feature.path)
                obj.feature = '/uploads/'+imgUrl
            }else {
                obj.feature = ''
            }
            aulterdb.insearSql(obj,(err1,result)=>{
                if(err1) {
                    console.log(err1);
                    
                    return res.send({
                        status:304,
                        msg:'数据错误'
                    })
                }
                res.send({
                    status:200,
                    msg:'文章新增成功'
                })
            })
            
            
        })
    }
}