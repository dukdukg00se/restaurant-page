import {createHome} from './modules/home.js';
import displayRevws from './modules/reviews.js';
import displayStory from './modules/story.js';
import displayMenu from './modules/menu.js';
import displayLocatn from './modules/location.js';

// Show base web page and display restaurant reviews
// This is the current home page
createHome();
displayRevws();

const main = document.querySelector('main');

// On logo click, display home page
const home = document.querySelector('#logo');
home.addEventListener('click', () => {
  main.removeChild(main.firstElementChild);
  displayRevws();
})

// Add event listeners on nav elements for page navigation
// Replace if else w/ switch statement
const navItems = document.querySelectorAll('li');
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    switch(e.target.id) {
      case 'home':
        main.removeChild(main.firstElementChild);
        displayRevws();
        break;
      case 'story':
        main.removeChild(main.firstElementChild);
        displayStory();
        break;
      case 'menu':
        main.removeChild(main.firstElementChild);
        displayMenu();
        break;
      case 'location-hours':
        main.removeChild(main.firstElementChild);
        displayLocatn();
    }
  });
});
