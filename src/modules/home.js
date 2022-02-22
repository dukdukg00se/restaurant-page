import restaurantLogo from '../assets/images/restaurant-logo.png'; 
import facebookLogo from '../assets/images/facebook-logo.svg';
import instagramLogo from '../assets/images/instagram-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';
import linkedinLogo from '../assets/images/linkedin-logo.svg';

import '../styles/reset.css';
import '../styles/home.css';


export default function createHome() {
  const content = document.querySelector('#content');

  //**** header content
  const header = document.createElement('header');
  header.id = 'header';

  const logoLink = document.createElement('a');
  logoLink.id = 'logo-link';
  logoLink.href = '#content';

  const logoImg = document.createElement('img');
  logoImg.id = 'logo-img';
  logoImg.src = restaurantLogo;



  logoImg.alt = 'restaurant logo';
  logoLink.appendChild(logoImg);

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');

  header.append(logoLink, navLinks);

  // attributes for nav anchor elements
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

  //**** page main content
  const main = document.createElement('main');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content';
  main.appendChild(mainContent);
  
  const title = document.createElement('h1');
  title.textContent = 'Pizzeria ';
  mainContent.append(title);

  const titleSpan = document.createElement('span');
  titleSpan.id = 'title-span';
  titleSpan.textContent = 'Michelangiolesca';
  title.appendChild(titleSpan);

  // restaurant review contents
  let reviews = [
    {
      'class': 'quote',
      'textContent': '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
      'author': 'Chef Boyardee'
    },
    {
      'class': 'quote',
      'textContent': '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
      'author': 'Chef Girlardee'
    }
  ]
  for (let i = 0; i < reviews.length; i++) {
    const quoteContainer = document.createElement('blockquote');

    let para = document.createElement('p');
    setReview(para, reviews[i], quoteContainer);

    mainContent.append(quoteContainer);
  }

  //**** footer contents
  const footer = document.createElement('footer');

  const mediaContainer = document.createElement('div');
  mediaContainer.id = 'media-container';

  const anchorAttrs = [
    {
      'href': 'https://www.facebook.com/'
    },
    {
      'href': 'https://www.instagram.com/'
    },
    {
      'href': 'https://www.twitter.com/'
    },
    {
      'href': 'https://www.linkedin.com/'
    }
  ]
  const imageAttrs = [
    {
      'alt': 'facebook logo',
      'src': facebookLogo
    },
    {
      'alt': 'instagram logo',
      'src': instagramLogo
    },
      {
      'alt': 'twitter logo',
      'src': twitterLogo
    },
      {
      'alt': 'linkedin logo',
      'src': linkedinLogo
    },
  ]

  // add media container and media links
  for (let i = 0; i < imageAttrs.length; i++) {
    const mediaLink = document.createElement('a');
    mediaLink.classList.add('media-link');
    mediaLink.target = '_blank';
    setAttributes(mediaLink, anchorAttrs[i]);

    const mediaImg = document.createElement('img');
    mediaImg.classList.add('media-img');
    setAttributes(mediaImg, imageAttrs[i]);
    mediaLink.appendChild(mediaImg);


    mediaContainer.append(mediaLink);

  }

  // add credit container and link to github
  const creditContainer = document.createElement('div');
  creditContainer.id = 'credits';
  const githubLink = document.createElement('a');
  githubLink.id = 'github-link';
  githubLink.href = 'https://github.com/dukdukg00se/restaurant-page';
  githubLink.textContent = 'Created by dukdukg00se 2021';


  let pathAttrs = {
    "fill-rule": "evenodd",
    d:
      "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  };
  
  let svgAttrs = {
    'aria-hidden': 'true',
    'viewBox': "0 0 16 16",
    'version': '1.1',
    'data-view-components': 'true',
    'id': 'github-logo',
    'path': ''
  }


  const githubImage = document.createElement('svg'); 
  for (let key in svgAttrs) {
    if (key === 'path') {
      const path = document.createElement('path');
      setAttributes(path, pathAttrs);
      githubImage.appendChild(path);
    } else {
      githubImage.setAttribute(key, svgAttrs[key]);
    }
  }
  console.log(githubImage);

  githubLink.appendChild(githubImage);

  creditContainer.append(githubLink);


  footer.append(mediaContainer, creditContainer);

  content.append(header, main, footer);
}


function setAttributes(elmnt, attrs) {
  for (let key in attrs) {
    key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);
  }
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

