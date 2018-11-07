const express=require("express");
const router=express.Router();
const pool=require("../pool");
///details
router.get("/",(req,res)=>{
    //按lid查询商品信息和规格列表
    var lid=req.query.lid,
    obj={product:{},
    pics:[]
};
(async function(){
    //1. 按lid查询商品信息——异步
    //两个pool.query和res.send都是异步，不一定哪个先执行，所以要用await，await前面没有return是因为这个查询sql语句不需要返回值
    var sql="SELECT * FROM xdd_product where lid=?";
    await new Promise(function(open){
        pool.query(sql,[lid],(err,result)=>{
            if(err) console.log(err);
        obj.product=result[0];
        open();
    })
})

//2. 按lid查询图片列表——异步
var sql="select * from xdd_product_pic where laptop_id=?";
await new Promise(function(open){
    pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
    obj.pics=result;
    open();
})
})
res.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
})
res.write(JSON.stringify(obj))
res.end();
//测试: http://localhost:2000/details?lid=5
})()
})

module.exports=router;