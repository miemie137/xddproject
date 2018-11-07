const express=require('express');
var router=express.Router();
var pool=require('../pool');

/*注册验证*/
router.get('/checkUname',(req,res)=>{
    var $uname=req.query.uname;
    if(!$uname){
    res.send('用户名不能为空');
    return;
}
var sql="select * from xdd_user where uname=?";
pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
if(result.length>0){
    res.send('1');//用户名已存在
}else{
    res.send('0');//用户名可用
}
});
});

/*用户注册*/
router.post('/add',(req,res)=>{
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
//把数据插入到数据库中
var sql = 'INSERT INTO xdd_user VALUES(NULL,?,?)';
pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
//提示注册成功
res.send("200");
});
});

/*用户登录*/
router.post('/login',(req,res)=>{
//获取用户名称
var $uname=req.body.uname;
//获取用户密码
var $upwd=req.body.upwd;
if(!$uname){
    res.send('用户名不存在');
    return;
}
if(!$upwd){
    res.send('用户密码不存在');
    return;
}
var sql="select * from xdd_user where uname=? and upwd=?";
pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
if(result.length>0){
    res.send("0");//登录成功
}else{
    res.send("1");//用户名或密码错误
}
});
});
module.exports=router;