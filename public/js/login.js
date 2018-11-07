var txtName=document.getElementsByName("uname")[0];
var txtPwd=document.getElementsByName("upwd")[0];
document.getElementsByName("login")[0].onclick=function(){
    var buname= txtName.value;
    var bupwd=txtPwd.value;
    var res=ajax({
        url:"http://localhost:2000/users/login",
        type:"post",
        data:"uname="+buname+"&upwd="+bupwd,
        dataType:"json"
    })
        .then(function(res){
            if (res=="0"){
                alert("登录成功");
                location.href="http://localhost:2000/products.html"
            }else{
                alert("用户名或密码错误");
                history.go(0);
            }
        })
}