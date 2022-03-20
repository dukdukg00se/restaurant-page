// import createHome from './modules/home.js';

import { createHome } from './modules/home.js';
import displayReviews from './modules/reviews.js';
import displayStory from './modules/story.js';
import displayMenu from './modules/menu.js';
import displayLocatn from './modules/location.js';

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
    // console.log(e.target.id);

    if (e.target.id === 'home') {
      main.removeChild(main.firstElementChild);
      displayReviews();
    } else if (e.target.id === 'story') {
      // console.log(main.firstElementChild);
      main.removeChild(main.firstElementChild);
      displayStory();
      
    } else if (e.target.id === 'menu') {
      main.removeChild(main.firstElementChild);
      displayMenu();
      // console.log('menu');
    } else if (e.target.id === 'location-hours') {
      main.removeChild(main.firstElementChild);
      displayLocatn();
    }


  });
});



