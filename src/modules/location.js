import '../styles/location.css';

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

const displayLocatn = () => {
  const main = document.querySelector('main');
  main.append(
    createSubContnr(
      'main-content',
      'location-container',
      'location-heading',
      'Location & Hours'
    )
  );

  const contactContnr = document.createElement('address');
  contactContnr.id = 'location';

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

  anchorAttrs.forEach(anchorObj => {
    const anchor = document.createElement('a');
    anchor.classList.add('contact');
    setAttrs(anchor, anchorObj);

    contactContnr.append(anchor);
  })

  const hoursContnr = document.createElement('div');
  hoursContnr.id = 'hrs-container';

  const hoursPrgph = document.createElement('p');
  hoursPrgph.textContent = ' 11:00AM - 8:00PM';

  const dates = document.createElement('strong');
  dates.textContent = 'Monday - Sunday:';

  hoursPrgph.insertBefore(dates, hoursPrgph.firstChild);

  hoursContnr.append(hoursPrgph);

  const subContnr = document.querySelector('#location-container');
  subContnr.append(contactContnr, hoursContnr);
  main.append(subContnr);
}

export default displayLocatn;