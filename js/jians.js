
$(".jobs-tab li").mousemove(function () {
    $(".jobs-tab li").removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();

    $(".products .mains").hide()/*removeClass("selected")*/;
    $(".products .mains").eq(index).show()/*addClass("selected")*/;

})