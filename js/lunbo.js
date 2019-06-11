$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, //图片循环
        autoplay: 3000, //设置自动轮播时间
        effect: 'fade', //淡入效果
        fade: {
            crossFade: true, //交叉淡入
        },
        // 分页器
        pagination: '.swiper-pagination',
        paginationClickable: true, //分页小点点可以点击
    });


    // 鼠标进入停止轮播, 鼠标移开自动轮播
    $(".swiper-container").mouseenter(function () {
        mySwiper.stopAutoplay();
    }).mouseleave(function () {
        mySwiper.startAutoplay();
    });
});