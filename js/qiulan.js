/**
 * Created by alice on 2018/1/14.
 */
<!--fixģ��jQueryʵ��-->

/*$("#x").click(function () {
    $("#x").parent().hide();
})*/
$("#x1").click(function () {
    $("#x1").parent().hide();
})
/*header������ͼƬ�仯*/

//��Сͼ����������¼�
$("#header1").mouseover(function () {
    //�ı��ͼ��display���Ը�Ϊblock
    $("#header2").show();
})

//��Сͼ������Ƴ��¼�
$("#header1").mouseout(function () {
    //�ı��ͼ��display���Ը�Ϊblock
    $("#header2").hide();
})


//�������ֲ�ͼ��Ч��
var index = 0;
var timeID = setInterval(nextPage, 2000);

//������Ӽ���������¼�
$(".slider ul li").mouseover(function () {
    //ֹͣ��ʱ��
    clearInterval(timeID);

    /*����ƽ�ȥ��Сͼ��̶�*/
    $(".slider ol li ").removeClass("current");
    $(".slider ol li ").eq(index).addClass("current");
    /*����ƽ�ȥ��Сͼ��̶�*/

})

//������Ӽ�����Ƴ��¼�
$(".slider ul li").mouseout(function () {
    //��ʼһ���µļ�ʱ��
    timeID = setInterval(nextPage, 2000);
})

/*�˴��ǵ��Сͼ�꣬��ת����Ӧ��ͼƬ*/
$(".slider ol li").mouseover(
    function () {
        clearInterval(timeID);
        index = $(this).index();
        $(".slider ol li").removeClass("current");
        $(this).addClass("current");
        $(".slider ul li").eq(index).fadeIn().siblings(".slider ul li").fadeOut();

    }
)
$(".slider ol li").mouseout(
    function () {
        timeID = setInterval(nextPage, 2000);
    }
)
/*�˴��ǵ��Сͼ�꣬��ת����Ӧ��ͼƬ*/


/*----------------------------------------*/
/*�˴��Ĺ����Ƿ�װһ���Զ���ת����һ�ŵĵĹ���*/
function nextPage() {

    $(".slider ul li ").eq(index).fadeOut();

    index++;
    if (index >= $(".slider ul li").length) {
        index = 0;
    }
    $(".slider ul li").eq(index).fadeIn();
    /*����ƽ�ȥ��Сͼ��̶�*/
    $(".slider ol li ").removeClass("current");
    $(".slider ol li ").eq(index).addClass("current");
    /*����ƽ�ȥ��Сͼ��̶�*/
}

/*----------------------------------------*/
/*�˴��Ƕ����˵�����ʾ*/
//�ҵ����е�1��li
$(".main .wrap>ul>li").mouseover(function () {

    //�ҵ��������һ��li��������Ԫ�����ul
//        console.log($(this).children("ul"));
    $(this).children("ul").stop().slideDown();
})


$(".main .wrap>ul>li").mouseout(function () {

    //�ҵ��������һ��li��������Ԫ�����ul
//        console.log($(this).children("ul"));
    $(this).children("ul").stop().slideUp();
});
/*�˴��Ƕ����˵�����ʾ*/
/*����ͼ��������ʾ����*/

$(".download").mouseover(function () {
    $(".download").css("opacity", 1);
})


$(".download").mouseout(function () {
    $(".download").css("opacity", 0.5);
})
/*�˴����˺�ע�ᵭ�뵭��*/


$(".main  .box-left li .link").mouseover(function () {
    $(this).children("span").addClass("hover");
    $(this).children("span").fadeToggle();
})
$(".main  .box-left li .link").mouseout(function () {
    $(".main  .box-left li .link span").removeClass("hover");
    $(".main  .box-left li .link span").show();
})
/*�˴��Ƕ����˵����л�*/

$(".main #content .box-right .tab li").mouseenter(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".main #content .box-right .products .main").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");


});

/*�����˵���css��ʽ*/

/*headerʵ�ֹ���*/
$(".header .side li").mouseenter(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
});
$(".header .side li").mouseleave(function () {
    $(".header .side li").removeClass("active");
});
/*headerʵ�ֹ���*/
