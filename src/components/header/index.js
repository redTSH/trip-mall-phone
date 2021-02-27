import './header.css';
import Scroll from 'utils/scroll';
const CHANGE_CLASS_NAME = 'header-change-color';

class Header {
    constructor(scrollContainer, changeEL = scrollContainer, changePoint = 0) {
        this.changeEL = changeEL;
        new Scroll(scrollContainer, changeEL, changePoint, {
            change: () => {
                this.change();
            },
            reset: () => {
                this.reset();
            }
        })
    }

    change() {
        this.changeEL.classList.add(CHANGE_CLASS_NAME);
    }

    reset() {
        this.changeEL.classList.remove(CHANGE_CLASS_NAME);
    }
}

export default Header;