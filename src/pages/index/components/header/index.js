import Header from 'components/header';
import 'components/searchbox';

const scrollContainer = document.getElementById('index-page');
const changeEL = scrollContainer.querySelector('.header')

new Header(scrollContainer, changeEL);