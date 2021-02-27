import './main-refund.css';
import render from './main-refund.art';

class Refund {
    constructor(el) {
        this.el = el;
    }
    set(data) {
        this.el.innerHTML = render({ data })
    }
}

export default Refund;