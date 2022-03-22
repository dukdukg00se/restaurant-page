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

  const hrsContainer = document.createElement('div');
  hrsContainer.id = 'hrs-container';

  const hrsPara = document.createElement('p');
  hrsPara.textContent = ' 11:00AM - 8:00PM';

  const dates = document.createElement('strong');
  dates.textContent = 'Monday - Sunday:';

  hrsPara.insertBefore(dates, hrsPara.firstChild);

  hrsContainer.append(hrsPara);

  locationContainer.append(contactContainer, hrsContainer);
  main.append(locationContainer);

}

// function setAttrs(elmnt, obj) {

//   for (let key in obj) {
//     if (key === 'textContent') {
//       elmnt.textContent = obj[key];
//     } else if (key === 'span') {
//       const elmntSpan = document.createElement('span');
//       setAttrs(elmntSpan, obj[key]);
//       elmnt.append(elmntSpan);
//     } else {
//       elmnt.setAttribute(key, obj[key]);
//     }
//   }
// }

function setAttrs(elmnt, obj) {
  for (let key in obj) {
    switch(key) {
      case 'textContent':
        elmnt.textContent = obj[key];
        break;
      case 'span':
        const elmntSpan = document.createElement('span');
        setAttrs(elmntSpan, obj[key]);
        elmnt.append(elmntSpan);
        break;
      default:
        elmnt.setAttribute(key, obj[key]);
    }
  }
}

export default displayLocatn;