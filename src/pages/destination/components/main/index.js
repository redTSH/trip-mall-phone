import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';
import { set, get, remove, clear } from 'utils/sessionStorage/sessionStorage'

const tabEl = document.getElementById('destination-main-side');
const tabItems = tabEl.querySelectorAll('.aside-item');
const contentEl = document.getElementById('destination-main-content');
const tab = new Tab(tabEl);
const content = new Content(contentEl);

tabEl.addEventListener('click', ev => {
    const itemClicking = ev.target;
    const itemClickingID = ev.target.getAttribute('data-id');
    if (itemClicking.nodeName.toLowerCase() === 'li') {
        const storageName = `content_${itemClickingID}`;
        const storageData = get(storageName);

        if (storageData) {
            tab.setActiveItem(itemClickingID - 1)
            content.setContent(storageData)
        } else {
            content.setLoading();
            const dataPromise = tab.to(itemClickingID);
            dataPromise.then(data => {
                if (data.code !== 200) {
                    throw new Error(`获取错误:${data.code}`)
                } else {
                    content.setContent(data.data)
                    set(storageName, data.data);
                }
            }).catch(err => {
                console.log(err)
            })
        }

    }
}, false)

tabItems[0].click()
