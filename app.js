//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const products=require("./routes/products");
const users=require("./routes/users");
const details=require("./routes/details");

var app = express();
var server = app.listen(2000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/products",products);
app.use("/users",users);
app.use("/details",details);
