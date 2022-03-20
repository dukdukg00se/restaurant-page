import '../styles/location.css';

const anchorAttrs = [
  {
    href: 'https://goo.gl/maps/WLfnuS4vb1fdn7eM6',
    textContent: '1420 Baker Street, Suite B, ',
    span: {
      id: 'city-span',
      textContent: 'Costa Mesa, CA 92626'
    }
  },
  {
    href: 'tel:714-708-2143',
    textContent: '714.708.2143'
  },
  {
    href: 'mailto:info@michelangiolesca.com',
    textContent: 'info@michelangiolesca.com'
  },
];

const displayLocatn = () => {
  const main = document.querySelector('main');

  const locationContainer = document.createElement('div');
  locationContainer.id = 'lochrs-container';
  // main.append(locHrsContainer);

  const title = document.createElement('h1');
  title.id = 'lochrs-heading';
  title.textContent = 'Location & Hours';
  locationContainer.append(title);

  const contactContainer = document.createElement('address');
  contactContainer.id = 'location';


  for (let i = 0; i < anchorAttrs.length; i++) {
    const anchor = document.createElement('a');
    anchor.classList.add('contact');
    setAttrs(anchor, anchorAttrs[i]);

    contactContainer.append(anchor)
  }

  

  locationContainer.append(contactContainer);
  main.append(locationContainer);

}

function setAttrs(elmnt, obj) {

  for (let key in obj) {
    if (key === 'textContent') {
      elmnt.textContent = obj[key];
    } else if (key === 'span') {
      const elmntSpan = document.createElement('span');
      // properties in span obj
      // console.log(obj[key]);
      for (let subKey in obj[key]) {
        console.log(subKey);
        // console.log(obj.key);

        setAttrs(elmntSpan, obj[key]);
        
        elmnt.append(elmntSpan);

      }
    } else {
      elmnt.setAttribute(key, obj[key]);
    }
  }

}



export default displayLocatn;