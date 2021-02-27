import { INIT_STATE, CHANGED_STATE } from './contants';
import DEFAULTS from './defaults';

class Scroll {
    constructor(scrollContainer, changeEL = scrollContainer, changePoint = 0, options) {
        this.scrollContainer = scrollContainer;
        this.changePoint = changePoint;
        this.changeEL = changeEL;
        this.options = Object.assign({}, DEFAULTS, options);

        this.state = INIT_STATE;

        this.bindEvent();
    }
    bindEvent() {
        const { change, reset } = this.options;
        this.scrollContainer.addEventListener('scroll', () => {
            // console.log(this.changePoint);
            if (this.needChange()) {
                if (typeof change === 'function') {
                    change();
                }
                this.state = CHANGED_STATE;
            } else if (this.needReset()) {
                if (typeof reset === 'function') {
                    reset()
                };
                this.state = INIT_STATE;
            }
        }, false)
    }
    needChange() {
        return this.scrollContainer.scrollTop > this.changePoint && this.state === INIT_STATE
    }
    needReset() {
        return this.scrollContainer.scrollTop <= this.changePoint && this.state === CHANGED_STATE
    }
}

export default Scroll;