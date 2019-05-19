const categoriesdb = require('../model/categoriesdb.js')
const url = require('url')

module.exports = {
    //处理静态页面
    categories: (req, res) => {
        res.render('categories', {})
    },

    //渲染动态数据资源
    getAllData: (req, res) => {
        categoriesdb.selAllSql((err, result) => {
            // console.log(result);
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了'
                })

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

        categoriesdb.addSql(params, (err, result) => {
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

        categoriesdb.selSql(id, (err, result) => {
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
        categoriesdb.updSql(params, (err, result) => {
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
        categoriesdb.delSql(id, (err, result) => {
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
        // console.log(delAllSql);
        categoriesdb.delAllSql(idStr, (err, result) => {
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