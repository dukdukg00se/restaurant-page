import createHome from './modules/home.js';
import displayReviews from './modules/reviews.js';
import displayStory from './modules/story.js';
import displayMenu from './modules/menu.js';
import displayLocatn from './modules/location.js';

createHome();
displayReviews();

const main = document.querySelector('main');

const home = document.querySelector('#logo');
home.addEventListener('click', () => {
  main.removeChild(main.firstElementChild);
  displayReviews();
})


const navItems = document.querySelectorAll('li');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {

    if (e.target.id === 'home') {
      main.removeChild(main.firstElementChild);
      displayReviews();
    } else if (e.target.id === 'story') {

      main.removeChild(main.firstElementChild);
      displayStory();
      
    } else if (e.target.id === 'menu') {
      main.removeChild(main.firstElementChild);
      displayMenu();

    } else if (e.target.id === 'location-hours') {
      main.removeChild(main.firstElementChild);
      displayLocatn();
    }

  });
});



