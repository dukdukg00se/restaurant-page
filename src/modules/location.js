import {createMnSubContnr, setElmnt} from './home.js';
import '../styles/location.css';

// Function appends "Location & Hours" content to "main" element
const displayLocatn = () => {
  const main = document.querySelector('main');
  main.append(
    createMnSubContnr(
      'main-contnt',
      'location-contnr',
      'location-heading',
      'Location & Hours'
    )
  );

  const contactContnr = document.createElement('address');
  contactContnr.id = 'location';

  // Array holds the attributes and text for address content
  let anchorAttrs = [
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
    setElmnt(anchor, anchorObj);

    contactContnr.append(anchor);
  })

  const hoursContnr = document.createElement('div');
  hoursContnr.id = 'hrs-container';

  const hoursPrgph = document.createElement('p');
  hoursPrgph.textContent = ' 11:00AM - 8:00PM';

  const days = document.createElement('strong');
  days.textContent = 'Monday - Sunday:';

  hoursPrgph.insertBefore(days, hoursPrgph.firstChild);

  hoursContnr.append(hoursPrgph);

  const subContnr = document.querySelector('#location-contnr');

  subContnr.append(contactContnr, hoursContnr);
}

export default displayLocatn;