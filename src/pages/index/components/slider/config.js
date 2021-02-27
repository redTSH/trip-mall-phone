const URL = 'https://www.imooc.com/api/mall-wepApp/index/slider';
const sliderContainer = document.getElementById('slider-container');
const SWIPER_CLASS = '.swiper-container';
const SwiperConfig = {
    // 循环模式
    loop: true,
    // 自动轮播
    autoplay: {
        delay: 2000,
    },
    // 分页器
    pagination: {
        el: '.swiper-pagination'
    }
    // 是否需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    // 是否需要滚动条
    //   scrollbar: {
    //     el: '.swiper-scrollbar'
    //   }
}
export { URL, sliderContainer, SWIPER_CLASS, SwiperConfig }