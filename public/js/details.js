(async function(){
    if(location.search.indexOf("lid=")!=-1){
        var lid=location.search.split("=")[1];
        //         ?lid=5   ?lid,5   5
        var res=await ajax({
            url:"http://localhost:2000/details",
            type:"get",
            data:`lid=${lid}`,
        dataType:"json"
    });
    var {product,pics}=res;
    var {title,price,details,is_onsale,shelf_time,sold_count}=product;
    var html=`<h6 class="font-weight-bold">${title}</h6>
    <h6><a class="small text-dark font-weight-bold" href="javascript:;">${details}</a></h6>
    <div class="alert alert-secondary small my_gradient" role="alert">
    <div>
    <span>售价：</span>
    <h2 class="d-inline text-primary font-weight-bold">¥${price.toFixed(2)}</h2>
    </div>
    <div>
    <span>服务承诺：</span>
    <span>*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</span>
    </div>
    </div>`
    var div=document.getElementById("details");
    div.innerHTML=html+div.innerHTML;



    var html="";
    for(var p of pics){
        var {sm,md,lg}=p

        html+=`<li class="float-left p-1">
        <img src="${sm}" data-md="${md}" data-lg="${lg}">
        </li>`;

    }
    var ul=document.querySelector(
        "#div-lg+div>div>ul"
    );
    ul.innerHTML=html;
    ul.style.width=`${62*pics.length}px`;
    var mImg=document.querySelector(
        "#preview>div>img"
    );
    mImg.src=pics[0].md;
    var lgDiv=document.getElementById("div-lg");
    lgDiv.style.backgroundImage=`url(${pics[0].lg})`;
}

var html=` <li class="float-left mb-2"><a class="text-muted small" href="#">商品名称：${title}</a></li>
<li class="float-left mb-2"><a class="text-muted small" href="#">功能：${details}</a></li>
<li class="float-left mb-2"><a class="text-muted small" href="#">上架时间：${new Date(shelf_time).getFullYear()+"年"+new Date(shelf_time).getMonth()+"月"+new Date(shelf_time).getDate()+"日"}</a></li>
<li class="float-left mb-2"><a class="text-muted small" href="#">库存量：${sold_count}</a></li>
<li class="float-left mb-2"><a class="text-muted small" href="#">分类：道具</a></li>
<li class="float-left mb-2"><a class="text-muted small" href="#">是否在售:${is_onsale==1?"是":"否"}</a></li>`
var ul=document.querySelector(
    "#params>div>div>div>ul"
);
ul.innerHTML=html;

//测试: http://localhost:3000/product_details.html?lid=5
var $prev=
    $("#preview>div>div:last-child>img:first-child");
var $next=$prev.nextAll("img");
var $ul=$prev.next().children();
var moved=0,LIWIDTH=62;
$next.click(function(){
    var $next=$(this);
    if(!$next.is(".disabled")){
        moved++;
        $ul.css("marginLeft",-LIWIDTH*moved);
        $prev.removeClass("disabled");
        if($ul.children().length-4==moved){
            $next.addClass("disabled");
        }
    }
})
$prev.click(function(){
    var $prev=$(this);
    if(!$prev.is(".disabled")){
        moved--;
        $ul.css("marginLeft",-LIWIDTH*moved);
    }
})
var $mImg=$("#preview>div>img");
var $lgDiv=$("#div-lg");
$ul.on("mouseover","img",function(){
    var $img=$(this);
    var md=$img.attr("data-md");
    $mImg.attr("src",md);//中图片路径是从小图片那里用自定义属性缓存过来的
    $lgDiv.css(
        "backgroundImage",`url(${$img.attr("data-lg")})`//换大图片的背景图片，路径同上理
    )
})
var $mask=$("#mask"),$smask=$("#super-mask");
var MSIZE=176,SMSIZE=352,MAX=SMSIZE-MSIZE;
$smask.hover(
    function(){
        $mask.toggleClass("d-none");
        $lgDiv.toggleClass("d-none");
    }
).mousemove(function(e){
        var top=e.offsetY-MSIZE/2;
        var left=e.offsetX-MSIZE/2;
        if(top<0) top=0;
        else if(top>MAX) top=MAX;
        if(left<0) left=0;
        else if(left>MAX) left=MAX;
        $mask.css({top,left});
        $lgDiv.css(
            "backgroundPosition",
      `${-16/7*left}px ${-16/7*top}px`
        )
    })
})()