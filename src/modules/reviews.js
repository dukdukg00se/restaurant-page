import '../styles/reviews.css';

const createSubContnr = (parentCls, parentId, headerId, headerTxt) => {
  const parent = document.createElement('div');
  parent.classList.add(parentCls);
  parent.id = parentId;

  const parentHdr = document.createElement('h1');
  parentHdr.id = headerId;
  parentHdr.textContent = headerTxt;

  parent.append(parentHdr);

  return parent;
};

const displayReviews = () => {
  const main = document.querySelector('main');
  main.append(
    createSubContnr(
      'main-content',
      'reviews-container',
      'reviews-heading',
      'Pizzeria'
    )
  );

  const subContnr = document.querySelector('#reviews-container'); 

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
