// import createHome from './modules/home.js';

import { createHome } from './modules/home.js';
import displayReviews from './modules/reviews.js';
import displayStory from './modules/story.js';

createHome();
// displayReviews();
// displayStory();

const pageLinks = document.querySelectorAll('a');
pageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log(e.target.id);

    if (e.target.id = 'story') {
      displayStory();
    }
  });
});



