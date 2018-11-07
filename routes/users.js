const express=require('express');
var router=express.Router();
var pool=require('../pool');

/*ע����֤*/
router.get('/checkUname',(req,res)=>{
    var $uname=req.query.uname;
    if(!$uname){
    res.send('�û�������Ϊ��');
    return;
}
var sql="select * from xdd_user where uname=?";
pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
if(result.length>0){
    res.send('1');//�û����Ѵ���
}else{
    res.send('0');//�û�������
}
});
});

/*�û�ע��*/
router.post('/add',(req,res)=>{
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
//�����ݲ��뵽���ݿ���
var sql = 'INSERT INTO xdd_user VALUES(NULL,?,?)';
pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
//��ʾע��ɹ�
res.send("200");
});
});

/*�û���¼*/
router.post('/login',(req,res)=>{
//��ȡ�û�����
var $uname=req.body.uname;
//��ȡ�û�����
var $upwd=req.body.upwd;
if(!$uname){
    res.send('�û���������');
    return;
}
if(!$upwd){
    res.send('�û����벻����');
    return;
}
var sql="select * from xdd_user where uname=? and upwd=?";
pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
if(result.length>0){
    res.send("0");//��¼�ɹ�
}else{
    res.send("1");//�û������������
}
});
});
module.exports=router;