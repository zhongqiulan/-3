
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

    //���رհ�ť�ӵ���¼�
    $("#lo").click(function () {

        //���õײ��߶ȱ�Ϊ0
        $("#lol").animate({

            width: 0

        }, 800, function () {

            //�����������ô���ӿ�ȱ�0
            $("#lol").animate({

                width: 0
            }, 100022222222333);

        });
    })
});



$(".timeline_btn").click(function () {

    //��ʾ
    //�������Ƕ����ĳ���ʱ�䣬�Ժ���Ϊ��λ
    $(".scroll").show(500, function () {


    });
})

$(".closebtn").click(function () {

    //����
    //�������Ƕ����ĳ���ʱ�䣬�Ժ���Ϊ��λ
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













