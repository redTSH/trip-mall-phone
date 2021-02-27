import './product.css';
import { URL, productContainer } from './config';
import render from './product.art';
import { getJSON } from 'api/ajax';

getJSON(URL).then(data => {
    if (data.code !== 200) {
        throw new Error(`商品模块获取错误:${data.code}`)
    } else {
        // console.log(data.data);
        productContainer.innerHTML = render({ items: data.data });
    }
}).catch(err => {
    alert(err)
})