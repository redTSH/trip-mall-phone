import './main-intros.css';
import render from './main-intros.art';

class Intros {
    constructor(el) {
        this.el = el;
    }
    set(data) {
        this.el.innerHTML = render({ items: data })
    }
}

export default Intros;