import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min';
import render from './slider.art';
import { getJSON } from 'api/ajax';
import { URL, sliderContainer, SWIPER_CLASS, SwiperConfig } from './config';


getJSON(URL).then(data => {
    if (data.code !== 200) {
        throw new Error(`轮播模块获取错误:${data.code}`)
    } else {
        // console.log(data.data);
        sliderContainer.innerHTML = render({
            ...SwiperConfig,
            ...{ img: data.data }
        });
    }
    new Swiper(SWIPER_CLASS, SwiperConfig)
}).catch(err => {
    alert(err)
})