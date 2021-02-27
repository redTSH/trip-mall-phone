import './nav.css';
import render from './nav.art';
import { getJSON } from 'api/ajax';
import { URL, navContainer } from './config';

getJSON(URL).then(data => {
    if (data.code !== 200) {
        throw new Error(`导航模块获取错误:${data.code}`)
    } else {
        // console.log(data.data);
        navContainer.innerHTML = render({ items: data.data });
    }
}).catch(err => {
    alert(err)
})