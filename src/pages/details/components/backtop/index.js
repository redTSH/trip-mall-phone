import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('details-page');
const changeEL = scrollContainer.querySelector('.backtop');
const changePoint = window.innerHeight;

new Backtop(scrollContainer, changeEL, changePoint)