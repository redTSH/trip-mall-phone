import './main-header.css';
import render from './main-header.art';

class Picbox {
    constructor(el) {
        this.el = el;
    }
    set(data) {
        this.el.innerHTML = render(data)
    }
}

export default Picbox;