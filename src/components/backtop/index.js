import './backtop.css'
import Scroll from 'utils/scroll'

const CHANGE_CLASS_NAME = 'backtop-hidden';

class Backtop {
    constructor(scrollContainer, changeEL = scrollContainer, changePoint = 0) {
        this.scrollContainer = scrollContainer;
        this.changeEL = changeEL;
        new Scroll(scrollContainer, changeEL, changePoint, {
            change: () => {
                this.change();
            },
            reset: () => {
                this.reset();
            }
        })
        this.bindEvent()
    }

    change() {
        this.changeEL.classList.remove(CHANGE_CLASS_NAME);
    }

    reset() {
        this.changeEL.classList.add(CHANGE_CLASS_NAME)
    }

    bindEvent() {
        this.changeEL.addEventListener('click', () => {
            this.scrollTo();
        }, false)
    }
    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior: 'smooth'
        })
    }
}

export default Backtop;