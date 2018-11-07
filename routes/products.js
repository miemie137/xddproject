const express=require("express");
//使用路由器
const router=express.Router();
//导入连接数据库的模块
const pool=require("../pool");

router.get("/",(req,res)=>{
    var kw=req.query.kw;
    var kws=kw.split(" ");
    kws.forEach((elem,i,kws)=>
    kws[i]=` title like '%${elem}%' `)
    var where=` where ${kws.join(" and ")}`
    var sql=`SELECT *,(
        select md from xdd_product_pic
        where laptop_id=lid
        limit 1
    ) as md
    FROM xdd_product`;
    sql+=where;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        data={};
        data.pno=req.query.pno;
        data.pageCount=Math.ceil(result.length/6)
        data.products=result.slice(data.pno*6,data.pno*6+6)
        res.send(data);
    })   
})

router.get("/product",(req,res)=>{
    var sql=`SELECT *,(
        select md from xdd_product_pic
        where laptop_id=lid
        limit 1
    ) as md
    FROM xdd_product`;
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
		data={};
		data.pno=req.query.pno;
        data.pageCount=Math.ceil(result.length/6)
        data.products=result.slice(data.pno*6,data.pno*6+6)
        res.send(data);
    })   
})
module.exports=router;

