import logo from '../assets/images/restaurant-logo.png'; 

export default function createHome() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  header.id = 'header';

  const logoLink = document.createElement('a');
  logoLink.id = 'logo-link';
  logoLink.href = '#content';

  const logoImg = document.createElement('img');
  logoImg.id = 'logo-img';
  logoImg.src = logo;
  logoImg.alt = 'restaurant logo';

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');


  // let data = [
  //   {
  //     'id': 'story',
  //     'href': '#story',
  //   },
  //   {
  //     'id': 'menu',
  //     'href': '#menu',
  //   },
  //   {
  //     'id': 'locations',
  //     'href': '#locations',
  //   },
  //   {
  //     'id': 'contact',
  //     'href': '#contact',
  //   }
  // ];
  // let navAnchorText = [
  //   'Our Story',
  //   'Menu',
  //   'Location & Hours',
  //   'Contact'
  // ]

  // for (let i = 0; i < data.length; i++) {
  //   const navItem = document.createElement('li');
  //   navItem.classList.add('nav-item');

  //   const navAnchor = document.createElement('a');
  //   setAttributes(navAnchor, data[i]);
  //   navAnchor.textContent = navAnchorText[i];
    
  //   navItem.append(navAnchor);

  //   navLinks.append(navItem);
  // }

  let navAnchorAttrs = [
    {
      'id': 'story',
      'href': '#story',
      'textContent': 'Our Story'
    },
    {
      'id': 'menu',
      'href': '#menu',
      'textContent': 'Menu'
    },
    {
      'id': 'locations',
      'href': '#locations',
      'textContent': 'Locations & Hours'
    },
    {
      'id': 'contact',
      'href': '#contact',
      'textContent': 'Contact'
    }
  ];

  for (let i = 0; i < navAnchorAttrs.length; i++) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');

    const navAnchor = document.createElement('a');
    setAttributes(navAnchor, navAnchorAttrs[i]);
    
    navItem.append(navAnchor);
    navLinks.append(navItem);
  }

  logoLink.appendChild(logoImg);
  header.append(logoLink, navLinks);
  content.appendChild(header);
}



function setAttributes(el, attrs) {
  for (let key in attrs) {
    key === 'textContent' ? el.textContent = attrs.textContent : el.setAttribute(key, attrs[key]);
  }
}

// function setAttributes(el, attrs) {
//   for (let key in attrs) {
//     if (key === 'textContent') {
//       el.textContent = attrs.textContent;
//     } else {
//       el.setAttribute(key, attrs[key]);
//     }
//   }
// }
