/**
 * Created by alice on 2018/1/14.
 */
<!--fix模块jQuery实现-->

/*$("#x").click(function () {
    $("#x").parent().hide();
})*/
$("#x1").click(function () {
    $("#x1").parent().hide();
})
/*header栏移入图片变化*/

//给小图加鼠标移入事件
$("#header1").mouseover(function () {
    //改变大图的display属性改为block
    $("#header2").show();
})

//给小图加鼠标移出事件
$("#header1").mouseout(function () {
    //改变大图的display属性改为block
    $("#header2").hide();
})


//做无限轮播图的效果
var index = 0;
var timeID = setInterval(nextPage, 2000);

//给大盒子加鼠标移入事件
$(".slider ul li").mouseover(function () {
    //停止计时器
    clearInterval(timeID);

    /*鼠标移进去，小图标固定*/
    $(".slider ol li ").removeClass("current");
    $(".slider ol li ").eq(index).addClass("current");
    /*鼠标移进去，小图标固定*/

})

//给大盒子加鼠标移出事件
$(".slider ul li").mouseout(function () {
    //开始一个新的计时器
    timeID = setInterval(nextPage, 2000);
})

/*此处是点击小图标，跳转到相应的图片*/
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
/*此处是点击小图标，跳转到相应的图片*/


/*----------------------------------------*/
/*此处的功能是封装一个自动跳转到下一张的的功能*/
function nextPage() {

    $(".slider ul li ").eq(index).fadeOut();

    index++;
    if (index >= $(".slider ul li").length) {
        index = 0;
    }
    $(".slider ul li").eq(index).fadeIn();
    /*鼠标移进去，小图标固定*/
    $(".slider ol li ").removeClass("current");
    $(".slider ol li ").eq(index).addClass("current");
    /*鼠标移进去，小图标固定*/
}

/*----------------------------------------*/
/*此处是二级菜单的显示*/
//找到所有的1级li
$(".main .wrap>ul>li").mouseover(function () {

    //找到被移入的一级li里所有子元素里的ul
//        console.log($(this).children("ul"));
    $(this).children("ul").stop().slideDown();
})


$(".main .wrap>ul>li").mouseout(function () {

    //找到被移入的一级li里所有子元素里的ul
//        console.log($(this).children("ul"));
    $(this).children("ul").stop().slideUp();
});
/*此处是二级菜单的显示*/
/*下载图标移入显示高亮*/

$(".download").mouseover(function () {
    $(".download").css("opacity", 1);
})


$(".download").mouseout(function () {
    $(".download").css("opacity", 0.5);
})
/*此处是账号注册淡入淡出*/


$(".main  .box-left li .link").mouseover(function () {
    $(this).children("span").addClass("hover");
    $(this).children("span").fadeToggle();
})
$(".main  .box-left li .link").mouseout(function () {
    $(".main  .box-left li .link span").removeClass("hover");
    $(".main  .box-left li .link span").show();
})
/*此处是二级菜单栏切换*/

$(".main #content .box-right .tab li").mouseenter(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".main #content .box-right .products .main").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");


});

/*二级菜单栏css样式*/

/*header实现功能*/
$(".header .side li").mouseenter(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
});
$(".header .side li").mouseleave(function () {
    $(".header .side li").removeClass("active");
});
/*header实现功能*/
