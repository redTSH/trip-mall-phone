import './main.css';

import 'components/loading'
import { getJSON } from 'api/ajax';
import Picbox from '../main-header';
import Intros from '../main-intros';
import Refund from '../main-refund';

const mainHeader = document.getElementById('main-header');
const mainIntros = document.getElementById('main-intros');
const mainRefund = document.getElementById('main-refund');

const picbox = new Picbox(mainHeader);
const intros = new Intros(mainIntros);
const refund = new Refund(mainRefund);

const URL = 'https://www.imooc.com/api/mall-wepApp/details/'
const id = window.location.search.substr(1).split("&")[0].split("=")[1];

getJSON(`${URL}${id}`).then(response => {
    if (response.code !== 200) {
        throw new Error(`获取错误:${response.code}`)
    } else {
        const data = response.data;
        picbox.set(data);
        intros.set(data.intros);
        refund.set(data.refund);
    }
}).catch(err => {
    console.log(err)
})