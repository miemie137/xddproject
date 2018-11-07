$(function(){
  function loadPage(pno=0){
    if(location.search.indexOf("kw=")!=-1){
      var kw=decodeURI(
        location.search.split("=")[1]
      );
      $.ajax({
        url:"http://localhost:2000/products/",
        type:"get",
        data:{kw,pno},
        dataType:"json",
        success:function(data){
          var {pno,pageCount,products}=data;
          var html="";
          for(var {md,price,title,lid,details} of products){
            html+=`<div class="col-md-4 col-sm-6 p-1">
                    <div class="card pr-2 pl-2">
                        <a href="details.html?lid=${lid}"><img src="${md}" class="card-img-top"/></a>
                        <div>
                            <h5 class="text-primary">¥${price.toFixed(2)}</h5>
                            <a href="details.html?lid=${lid}" class="text-muted my_small" title="${title}">${title}<p>${details}</p></a>
                            <div class="d-flex justify-content-between align-items-center">
                                <button class="btn text-dark border-0 my_btn_color p-0"type="button">-</button>
                                <input type="text" value="1" class="form-control p-1 text-center my_pro_input"/>
                                <button class="btn text-dark border-0 my_btn_color p-0"type="button">+</button>
                                <a href="#" class="btn btn-primary" data-lid="${lid}">加入购物车</a>
                            </div>
                        </div>
                    </div>
                </div>`
          }
          $("#plist").html(html);

          var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
          for(var i=1;i<=pageCount;i++){
            html+=`<li class="page-item ${pno==i-1?'active':''}"><a class="page-link ${pno!=i-1?'bg-transparent':'border'}" href="#">${i}</a></li>`;
          }
          html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
          var $page=$(".pagination")
          $page.html(html);
          if(pno==0)
            $page.children(":first").addClass("disabled")
          if(pno==pageCount-1)
            $page.children(":last").addClass("disabled")
        }
      })
    }else{
	  $.ajax({
        url:"http://localhost:2000/products/product",
        type:"get",
		data:{pno},
        dataType:"json",
        success:function(data){ 
		  var {pno,pageCount,products}=data;
          var html="";
          for(var {md,price,title,lid,details} of products){
            html+=`<div class="col-md-4 col-sm-6 p-1">
                    <div class="card pr-2 pl-2">
                        <a href="details.html?lid=${lid}"><img src="${md}" class="card-img-top"/></a>
                        <div>
                            <h5 class="text-primary">¥${price.toFixed(2)}</h5>
                            <a href="details.html?lid=${lid}" class="text-muted my_small" title="${title}">${title}<p>${details}</p></a>
                            <div class="d-flex justify-content-between align-items-center">
                                <button class="btn text-dark border-0 my_btn_color p-0"type="button">-</button>
                                <input type="text" value="1" class="form-control p-1 text-center my_pro_input"/>
                                <button class="btn text-dark border-0 my_btn_color p-0"type="button">+</button>
                                <a href="#" class="btn btn-primary" data-lid="${lid}">加入购物车</a>
                            </div>
                        </div>
                    </div>
                </div>`
          }
          $("#plist").html(html);
  
          var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
          for(var i=1;i<=pageCount;i++){
            html+=`<li class="page-item ${pno==i-1?'active':''}"><a class="page-link ${pno!=i-1?'bg-transparent':'border'}" href="#">${i}</a></li>`;
          }
          html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
          var $page=$(".pagination")
          $page.html(html);
          if(pno==0)
            $page.children(":first").addClass("disabled")
          if(pno==pageCount-1)
            $page.children(":last").addClass("disabled")
        }
      })
	  }
  }
  loadPage();
  
  var pno=0;
  $(".pagination").on("click","a",function(e){
    e.preventDefault();
    var $a=$(this);
    if(!$a.parent().is(".disabled,.active")){
      if($a.html()=="上一页"){
        pno=pno-1;
      }else if($a.html()=="下一页"){
		 pno=pno+1;
      }else{
        pno=$a.html()-1;
      }
      loadPage(pno);
    }
  })
    var btns=document.getElementsByTagName("button");
    for(var btn of btns){
     btn.onclick = function () {
     //捷径: this->当前btn
     var btn = this;//这个btn跟上面的全局变量btn没关系
     //3. 查找要修改的元素
     var input = btn.parentNode.children[3];
     //4. 修改元素
     var n = parseInt(input.value);
     if (btn == input.nextElementSibling)
     n++;
     else if (n > 1)
     n--;
     input.value = n;
     var span=input.nextElementSibling.nextElementSibling;
     var price=parseFloat(btn.parentNode.children[1].innerHTML.slice(1));
     console.log(price)
     var sub=price*n;
     span.innerHTML=`¥${sub.toFixed(2)}`;
     }
     }

    $("#plist").on("click","button",function() {
        var $btn = $(this);
        console.log($btn[0]);
        var $input = $btn.parent().children("input");
        console.log($input);
        var n = parseInt($input.val());
        console.log(n)
        console.log($input.next()[0])
        if ($btn[0] == $input.next()[0])
            n++;
        else if (n > 1)
            n--;
        console.log(n)
        $input.val(n);
    })

})






