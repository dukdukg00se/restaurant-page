import {createMnSubContnr} from './home.js';
import '../styles/reviews.css';

//Constructor to create new review
function Review(text, auth) {
  this.textContent = text;
  this.author = auth;
}

// Array for restaurant reviews
let reviews = [];

// Reviews from boyardee and girlardee
const boyardee = new Review(
  '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
  'Chef Boyardee'
);

const girlardee = new Review(
  '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
  'Chef Girlardee'
)

reviews.push(boyardee, girlardee);

// Function appends heading and quotes to main element
const displayRevws = () => {
  const main = document.querySelector('main');
  main.append(
    createMnSubContnr(
      'main-contnt',
      'reviews-contnr',
      'reviews-hdng',
      'Pizzeria'
    )
  );

  const heading = document.querySelector('#reviews-hdng');
  
  const headingSpn = document.createElement('span');
  headingSpn.id = 'heading-span';
  headingSpn.textContent = 'Michelangiolesca';
  heading.append(headingSpn);

  const subContnr = document.querySelector('#reviews-contnr');

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
}

export default displayRevws;

/** 
* Practice using constructors 
* Use Review constructor to replace hardcoded reviews array
*/
// let reviews = [
//   {
//     textContent: '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
//     author: 'Chef Boyardee'
//   },
//   {
//     textContent: '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
//     author: 'Chef Girlardee'
//   }
// ]