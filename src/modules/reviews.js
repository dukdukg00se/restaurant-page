import '../styles/reviews.css';

const displayReviews = () => {
  const main = document.querySelector('main');
  
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  mainContent.id = 'reviews-container';
  
  const heading = document.createElement('h1');
  heading.id = 'reviews-heading';
  heading.textContent = 'Pizzeria ';
  mainContent.append(heading);

  const headingSpan = document.createElement('span');
  headingSpan.id = 'heading-span';
  headingSpan.textContent = 'Michelangiolesca';
  heading.appendChild(headingSpan);


  let reviews = [
    {
      'textContent': '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
      'author': 'Chef Boyardee'
    },
    {
      'textContent': '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
      'author': 'Chef Girlardee'
    }
  ]
  for (let i = 0; i < reviews.length; i++) {
    const quoteContainer = document.createElement('blockquote');

    let para = document.createElement('p');
    para.classList.add('quote');
    setReview(para, reviews[i], quoteContainer);

    mainContent.appendChild(quoteContainer);
  }
  main.appendChild(mainContent);
}

function setReview(elmnt, attrs, elmntContainer) {
  let cite;
  for (let key in attrs) {
    if (key === 'textContent') {
      elmnt.textContent = attrs.textContent;
    } else if (key === 'author') {
      cite = document.createElement('cite');
      cite.textContent = '-- ' + attrs.author;
    } else {
      elmnt.setAttribute(key, attrs[key]);
    }
  }
  elmntContainer.append(elmnt, cite);
}

export default displayReviews;
