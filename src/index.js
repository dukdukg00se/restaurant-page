// import createHome from './modules/home.js';

import { createHome } from './modules/home.js';
import displayReviews from './modules/reviews.js';
import displayStory from './modules/story.js';
import displayMenu from './modules/menu.js';

createHome();
displayReviews();
// displayStory();
const main = document.querySelector('main');

const home = document.querySelector('#logo');
home.addEventListener('click', () => {
  main.removeChild(main.firstElementChild);
  displayReviews();
})


const navItems = document.querySelectorAll('li');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {

    if (e.target.id === 'story') {
      main.removeChild(main.firstElementChild);
      displayStory();
      // console.log('story');
    } else if (e.target.id === 'menu') {
      main.removeChild(main.firstElementChild);
      displayMenu();
      // console.log('menu');
    } 

  });
});



