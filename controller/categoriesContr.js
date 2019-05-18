const categoriesdb = require('../model/categoriesdb.js')
const url = require('url')

module.exports = {
    //处理静态页面
    categories: (req, res) => {
        res.render('categories', {})
    },

    //渲染动态数据资源
    getAllData: (req, res) => {
        let selSql = `SELECT*FROM categories`
        categoriesdb.query(selSql, (err, result) => {
            // console.log(result);
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了'
                })
                return
            }
            res.send({
                status: 200,
                msg: '加载完成',
                data: result
            })

        })
    },

    //处理新增分类数据
    addSort: (req, res) => {
        let params = req.body
        // console.log(params);
        let addSql = `INSERT INTO categories (name,slug)VALUES ('${params.name}','${params.slug}')`
        categoriesdb.query(addSql, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错啦'
                })
                return
            }
            res.send({
                status: 200,
                msg: '新增成功',
            })
        })

    },

    //处理分类编辑内容
    selSortById: (req, res) => {
        let id = req.query.id
        // console.log(id);
        let selSql = `SELECT*FROM categories WHERE id=${id}`
        categoriesdb.query(selSql, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了'
                })
                return
            }
            res.send({
                status: 200,
                data: result[0]
            })
        })

    },

    //处理编辑提交的数据
    updateCategories: (req, res) => {
        let params = req.body
        // console.log(params);
        let updSql = `UPDATE categories SET name='${params.name}',slug='${params.slug}' WHERE id = ${params.id}`
        categoriesdb.query(updSql, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了'
                })
                return
            }
            res.send({
                status: 200,
                msg: '修改成功'
            })
        })

    },

    //处理删除分类
    delSort: (req, res) => {
      
            let id = req.query.id
            // console.log(id);
            let delSql = `DELETE FROM categories WHERE id=${id}`
            categoriesdb.query(delSql, (err, result) => {
                if (err) {
                    res.send({
                        status: 400,
                        msg: '出错了'

                    })
                    return
                }
                res.send({
                    status: 200,
                    msg: '删除成功'
                })
            })
        
    },

    //处理批量删除
    delAllSort: (req, res) => {
        
            let ids = req.body
            // console.log(ids);
            let idStr = ids.id.join(',')
            let delAllSql = `DELETE FROM categories WHERE id in (${idStr})`
            // console.log(delAllSql);
            categoriesdb.query(delAllSql, (err, result) => {
                if (err) {
                    res.send({
                        status: 400,
                        msg: '出错了'
                    })
                    return
                }
                res.send({
                    status: 200,
                    msg: '删除成功'
                })
            })
        }
    

}