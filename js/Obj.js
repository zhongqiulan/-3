
$(function(){
   var yuanse
   $(".box a").mouseover(function(){
      yuanse=$(this).css("color")
      //console.log("hbdcsc");
      $(this).css("color","#FF7219")

   $(".box a").mouseout(function(){
      $(this).css("color",yuanse)
   })
})

    $(".song-list>ul>li>a").click(function(){
        $(".song-list>ul>li>a span").toggleClass("radio")
    })
})




$(function () {

    //给关闭按钮加点击事件
    $("#lo").click(function () {

        //先让底部高度变为0
        $("#lol").animate({

            width: 0

        }, 800, function () {

            //动画结束后让大盒子宽度变0
            $("#lol").animate({

                width: 0
            }, 100022222222333);

        });
    })
});



$(".timeline_btn").click(function () {

    //显示
    //参数就是动画的持续时间，以毫秒为单位
    $(".scroll").show(500, function () {


    });
})

$(".closebtn").click(function () {

    //隐藏
    //参数就是动画的持续时间，以毫秒为单位
    $(".scroll").hide(500,function(){


    });
})


    /*$(".hdau").mouseover(function(){
     $('.hdau').removeClass('animated')

     })
     $(".hdau").mouseout(function(){
     $('.hdau').addClass('animated')
     })*/



$(".lankTu>ul>li").mouseenter(function(){
    $(this).removeClass("animated")
})
$(".lankTu>ul>li").mouseleave(function(){
    $(this).addClass("animated wobble")
})

$(".song-list>ul>li").mouseenter(function(){
    $(this).addClass("animated bounce ")
})

$(".song-list>ul>li").mouseleave(function(){
    $(this).removeClass("animated")
})













