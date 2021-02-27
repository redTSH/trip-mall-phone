import './tab.css';
import { ITEM_CLASS, ITEM_ACTIVE_CLASS_NAME, URL } from './config';
import { getJSON } from 'api/ajax';

class Tab {
    constructor(el) {
        this.el = el;
        this.items = el.querySelectorAll(ITEM_CLASS);
    }
    setActiveItem(index) {
        for (let item of this.items) {
            item.classList.remove(ITEM_ACTIVE_CLASS_NAME)
        }
        this.items[index].classList.add(ITEM_ACTIVE_CLASS_NAME);
    }
    to(id) {
        this.setActiveItem(id - 1);
        // 防止网速慢的时候出bug 终止前一个没完成的ajax
        if (this.resultPromise && this.resultPromise.xhr) {
            this.resultPromise.xhr.abort();
        }
        this.resultPromise = getJSON(`${URL}\/${id}`);
        return this.resultPromise;
    }
}

export default Tab;