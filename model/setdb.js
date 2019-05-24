const db = require('./db.js')

module.exports={
    query:db.query,
    selNav:(callback)=>{
        let selSql = `SELECT value FROM options WHERE options.key = 'nav_menus'`
        //执行sql语句
        db.query(selSql,(err,result)=>{
            callback(err,result)
        })
    },
    addNav:function(obj,callback){
        this.selNav((err,result)=>{
            if (err) {
                return callback(err,null)
            }
            //把数据转为json对象
            let arr = JSON.parse(result[0].value)
            //在数据最后添加上新增数据
            arr.push(obj)
            //把对象转为json格式字符串
            let str = JSON.stringify(arr)
            let upSql = `UPDATE options SET value ='${str}' WHERE options.key = 'nav_menus'`
            //执行语句
            db.query(upSql,(err1,result)=>{
                callback(err1,result)
            })
        })
    },
    delNav:function(index,callback){
        this.selNav((err,result)=>{
            if (err) {
                return callback(err,null)
            }
            let arr = JSON.parse(result[0].value)
            arr.splice(index,1)
            let str = JSON.stringify(arr)
            let sql = `UPDATE options SET value = '${str}' WHERE options.key='nav_menus'`
            //执行语句
            db.query(sql,(err1,result)=>{
                callback (err1,result)
            })
   
        })
    },
    delAll:function(indexArr,callback){
        this.selNav((err,result)=>{
            if (err) {
                return callback(err,null)
            }
            let arr = JSON.parse(result[0].value)
            // console.log(arr);
            // console.log(indexArr);
            indexArr.forEach(value=>{
                arr[value]=''
                
            })
            // console.log(arr);
            let newArr = []
            arr.forEach(value=>{
                if(value!='') {
                    newArr.push(value)
                }
            })
            let str = JSON.stringify(newArr)
            let sql = `UPDATE options SET value = '${str}' WHERE options.key='nav_menus'`
            //执行语句
            db.query(sql,(err1,result)=>{
                callback (err1,result)
            })
   
        })
    }
}