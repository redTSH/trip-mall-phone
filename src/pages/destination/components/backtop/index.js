import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('destination-main-content');
const changeEL = document.querySelector('.backtop');
const changePoint = scrollContainer.offsetHeight;


new Backtop(scrollContainer, changeEL, changePoint)