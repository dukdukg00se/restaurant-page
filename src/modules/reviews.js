import {createMnSubContnr} from './home.js';
import '../styles/reviews.css';

const displayReviews = () => {
  const main = document.querySelector('main');
  main.append(
    createMnSubContnr(
      'main-content',
      'reviews-container',
      'reviews-heading',
      'Pizzeria'
    )
  );

  const heading = document.querySelector('#reviews-heading');
  
  const headingSpn = document.createElement('span');
  headingSpn.id = 'heading-span';
  headingSpn.textContent = 'Michelangiolesca';
  heading.append(headingSpn);

  let reviews = [
    {
      textContent: '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
      author: 'Chef Boyardee'
    },
    {
      textContent: '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
      author: 'Chef Girlardee'
    }
  ]
  const subContnr = document.querySelector('#reviews-container'); 
  reviews.forEach(review => {
    const blockqte = document.createElement('blockquote');

    const prgph = document.createElement('p');
    prgph.classList.add('quote');

    blockqte.append(prgph);

    for (let key in review) {
      if (key === 'textContent') {
        prgph.textContent = review[key];
      } 
      
      if (key === 'author') {
        const cite = document.createElement('cite');
        cite.textContent = '-- ' + review[key];
        blockqte.append(cite);
      }
    }
    subContnr.append(blockqte);
  })
  main.append(subContnr);
}

export default displayReviews;
