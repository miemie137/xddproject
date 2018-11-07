SET NAMES UTF8;
DROP DATABASE IF EXISTS xdd;
CREATE DATABASE xdd CHARSET=UTF8;
USE xdd;

/*商品列表*/
CREATE TABLE xdd_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #标题
  details VARCHAR(1024),      #产品详细说明
  price DECIMAL(10,2),        #价格
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN          #是否促销中
);

/*商品图片*/
CREATE TABLE xdd_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/*商品信息*/
INSERT INTO xdd_product VALUES
(NULL,'时光机','爬进抽屉里，带你去冒险',9999,150123456789,2968,true),
(NULL,'竹蜻蜓','以梦为马，以云为被',6986,150954632296,6352,true),
(NULL,'记忆面包','妈妈再也不用担心我的学习啦',9863,150128563214,9935,true),
(NULL,'餐桌斗篷','吃饱才有力气减肥',8922,150185462156,5842,true),
(NULL,'空气炮','Boom~Boom~Boom~敌人全消失',6988,159845632333,5322,true),
(NULL,'任意门','想去哪里去哪里',6882,150985413789,9769,true),
(NULL,'缩小灯','来到巨人国啦',8929,150128521789,9996,true),
(NULL,'桃太郎饭团','小动物吃了会听你的话哦',6953,150195632189,9423,true),
(NULL,'格列魔隧道','通过隧道会变小变大',5395,159546367893,3635,true),
(NULL,'初次体验印章','只要在身后盖上这种印章,不论什么事情都能获得如同初次体验般的感动',11063,156459856323,1265,true),
(NULL,'阿拉丁神灯','只要一擦这盏阿拉丁的神灯,就会出现一个烟雾机器人,无论你说什么话,他都会听,',9836,156452854263,3546,true),
(NULL,'室内旅行机','待在房间里,但通过室内旅行机的立体放映设备,使你能够体验到旅行的气氛',12653,155463967893,362,true),
(NULL,'引路小天使','把它套在手上和它商量,就能得到最好的答案',15325,156452569563,1256,true),
(NULL,'超级手套','只要戴上这种超级手套,就能成为大力神',3652,156874562014,6395,true),
(NULL,'延时光线','在这种光线里十分钟感觉就像是一个小时',4623,156456523693,6952,true),
(NULL,'电脑铅笔','什么问题都能很快地解出来哦',18325,156854632156,9536,true),
(NULL,'云制造机','制造出一朵朵的云',23562,155632541893,203,true);


/*商品图片*/
INSERT INTO xdd_product_pic VALUES 
(NULL,1,'img/product/sm/0.jpg','img/product/md/0.jpg','img/product/lg/0.jpg'),
(NULL,1,'img/product/sm/00.jpg','img/product/md/00.jpg','img/product/lg/00.jpg'),
(NULL,1,'img/product/sm/01.jpg','img/product/md/01.jpg','img/product/lg/01.jpg'),
(NULL,1,'img/product/sm/02.jpg','img/product/md/02.jpg','img/product/lg/02.jpg'),
(NULL,1,'img/product/sm/03.jpg','img/product/md/03.jpg','img/product/lg/03.jpg'),
(NULL,1,'img/product/sm/04.jpg','img/product/md/04.jpg','img/product/lg/04.jpg'),
(NULL,1,'img/product/sm/05.jpg','img/product/md/05.jpg','img/product/lg/05.jpg'),
(NULL,2,'img/product/sm/1.jpg','img/product/md/1.jpg','img/product/lg/1.jpg'),
(NULL,2,'img/product/sm/1_0.jpg','img/product/md/1_0.jpg','img/product/lg/1_0.jpg'),
(NULL,2,'img/product/sm/1_1.jpg','img/product/md/1_1.jpg','img/product/lg/1_1.jpg'),
(NULL,2,'img/product/sm/1_2.jpg','img/product/md/1_2.jpg','img/product/lg/1_2.jpg'),
(NULL,2,'img/product/sm/1_3.jpg','img/product/md/1_3.jpg','img/product/lg/1_3.jpg'),
(NULL,2,'img/product/sm/1_4.jpg','img/product/md/1_4.jpg','img/product/lg/1_4.jpg'),
(NULL,2,'img/product/sm/1_5.jpg','img/product/md/1_5.jpg','img/product/lg/1_5.jpg'),
(NULL,3,'img/product/sm/2.jpg','img/product/md/2.jpg','img/product/lg/2.jpg'),
(NULL,3,'img/product/sm/2_0.jpg','img/product/md/2_0.jpg','img/product/lg/2_0.jpg'),
(NULL,3,'img/product/sm/2_1.jpg','img/product/md/2_1.jpg','img/product/lg/2_1.jpg'),
(NULL,3,'img/product/sm/2_2.jpg','img/product/md/2_2.jpg','img/product/lg/2_2.jpg'),
(NULL,3,'img/product/sm/2_3.jpg','img/product/md/2_3.jpg','img/product/lg/2_3.jpg'),
(NULL,3,'img/product/sm/2_4.jpg','img/product/md/2_4.jpg','img/product/lg/2_4.jpg'),
(NULL,3,'img/product/sm/2_5.jpg','img/product/md/2_5.jpg','img/product/lg/2_5.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,4,'img/product/sm/3.jpg','img/product/md/3.jpg','img/product/lg/3.jpg'),
(NULL,5,'img/product/sm/4.jpg','img/product/md/4.jpg','img/product/lg/4.jpg'),
(NULL,5,'img/product/sm/4_0.jpg','img/product/md/4_0.jpg','img/product/lg/4_0.jpg'),
(NULL,5,'img/product/sm/4_1.jpg','img/product/md/4_1.jpg','img/product/lg/4_1.jpg'),
(NULL,5,'img/product/sm/4_2.jpg','img/product/md/4_2.jpg','img/product/lg/4_2.jpg'),
(NULL,5,'img/product/sm/4_3.jpg','img/product/md/4_3.jpg','img/product/lg/4_3.jpg'),
(NULL,5,'img/product/sm/4_4.jpg','img/product/md/4_4.jpg','img/product/lg/4_4.jpg'),
(NULL,5,'img/product/sm/4_5.jpg','img/product/md/4_5.jpg','img/product/lg/4_5.jpg'),
(NULL,6,'img/product/sm/5.jpg','img/product/md/5.jpg','img/product/lg/5.jpg'),
(NULL,6,'img/product/sm/5_0.jpg','img/product/md/5_0.jpg','img/product/lg/5_0.jpg'),
(NULL,6,'img/product/sm/5_1.jpg','img/product/md/5_1.jpg','img/product/lg/5_1.jpg'),
(NULL,6,'img/product/sm/5_2.jpg','img/product/md/5_2.jpg','img/product/lg/5_2.jpg'),
(NULL,6,'img/product/sm/5_3.jpg','img/product/md/5_3.jpg','img/product/lg/5_3.jpg'),
(NULL,6,'img/product/sm/5_4.jpg','img/product/md/5_4.jpg','img/product/lg/5_4.jpg'),
(NULL,6,'img/product/sm/5_5.jpg','img/product/md/5_5.jpg','img/product/lg/5_5.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,7,'img/product/sm/6.jpg','img/product/md/6.jpg','img/product/lg/6.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,8,'img/product/sm/7.jpg','img/product/md/7.jpg','img/product/lg/7.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,9,'img/product/sm/10.jpg','img/product/md/10.jpg','img/product/lg/10.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,10,'img/product/sm/14.jpg','img/product/md/14.jpg','img/product/lg/14.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,11,'img/product/sm/15.jpg','img/product/md/15.jpg','img/product/lg/15.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,12,'img/product/sm/16.jpg','img/product/md/16.jpg','img/product/lg/16.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,13,'img/product/sm/17.jpg','img/product/md/17.jpg','img/product/lg/17.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,14,'img/product/sm/18.jpg','img/product/md/18.jpg','img/product/lg/18.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,15,'img/product/sm/19.jpg','img/product/md/19.jpg','img/product/lg/19.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,16,'img/product/sm/20.jpg','img/product/md/20.jpg','img/product/lg/20.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg'),
(NULL,17,'img/product/sm/21.jpg','img/product/md/21.jpg','img/product/lg/21.jpg');

/*用户列表*/
CREATE TABLE `xdd_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  PRIMARY KEY  (`uid`)
);

/*用户列表*/
INSERT INTO `xdd_user` VALUES ('1', 'miemie', '123456');