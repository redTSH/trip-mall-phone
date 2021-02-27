import './header.css';
import 'icons/iconfont.css'
import Header from 'components/header';

const scrollContainer = document.getElementById('details-page');
const changeEl = scrollContainer.querySelector('.header');

new Header(scrollContainer, changeEl);