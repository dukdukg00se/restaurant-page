const displayReviews = () => {
  const main = document.querySelector('main');
  
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content';
  
  const title = document.createElement('h1');
  title.textContent = 'Pizzeria ';
  mainContent.append(title);

  const titleSpan = document.createElement('span');
  titleSpan.id = 'title-span';
  titleSpan.textContent = 'Michelangiolesca';
  title.appendChild(titleSpan);


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
