var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
var isRegister=false;
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
function getFocus(){
    //this->当前文本框
    //当前文本框边框加粗
    this.className="txt_focus";
    //清除旁边div的class
    var div=this.parentNode
        .nextElementSibling
        .firstElementChild;
    div.className="";
}
txtName.onblur=function(){
   var bole=vali(this,/^\w{1,10}$/);
    var div=this.parentNode
        .nextElementSibling
        .firstElementChild;
    var buname= txtName.value;
    var res=ajax({
        url:"http://localhost:2000/users/checkUname",
        type:"get",
        data:"uname="+buname,
        dataType:"json"
    })
    .then(function(res){
    if (res=="1"){
        div.innerHTML="用户名已存在";
        div.className="";
        isRegister=false;
    }else if(res=="0"&&bole==true){//就算格式不通过但用户名不存在还是会发到后台验证并返回0，所以要加条件
        div.innerHTML="用户名可用";
        div.className="";
        isRegister=true;
    }
})
}
 function vali(txt,reg){
    //清除当前文本框的class
    txt.className="";
    //获取旁边div
   var div=txt.parentNode
        .nextElementSibling
        .firstElementChild;
    //用reg测试当前文本框的内容
    //如果通过,就修改div的class为vali_success
    if(reg.test(txt.value)){
       if(txt==txtPwd)//通过的情况下让txtName显示用户名可用而不是vali_success
        div.className="vali_success";
        return true;
    }
    //否则修改div的class为vali_fail
    else{
        div.className="vali_fail";
        if(txt==txtName)//输入内容后上面已经修改div.innerHTML,再清空要把它改回来
        div.innerHTML="10个字符以内的字母、数字或下划线的组合";
        return false;
    }
}
txtPwd.onblur=function(){
    vali(this,/^\w{6,12}$/);
}
document.getElementsByName("register")[0].onclick=function(){
    if(!vali(txtName,/^\w{1,10}$/))
        txtName.focus();
    else if(!vali(txtPwd,/^\w{6,12}$/))
        txtPwd.focus();
    else if(isRegister==true){
        var buname= txtName.value;
        var bupwd=txtPwd.value;
        var res=ajax({
            url:"http://localhost:2000/users/add",
            type:"post",
            data:"uname="+buname+"&upwd="+bupwd,
            dataType:"json"
        })
        .then(function(res){
          if (res=="200"){
             alert("注册成功");
              history.go(0);//刷新页面
          }else{
             alert("注册失败");
              history.go(0);
                }
            })
    }
}