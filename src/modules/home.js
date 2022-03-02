import restaurantLogo from '../assets/images/restaurant-logo.png'; 
import facebookLogo from '../assets/images/facebook-logo.svg';
import instagramLogo from '../assets/images/instagram-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';
import linkedinLogo from '../assets/images/linkedin-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
import githubLogoWhite from '../assets/images/github-logo-white.svg';

import '../styles/reset.css';
import '../styles/home.css';


// export default function createHome() {
//   const content = document.querySelector('#content');

//   //**** header content
//   const header = document.createElement('header');
//   header.id = 'header';
//   header.setAttribute('class', 'test');

//   const logoLink = document.createElement('a');
//   logoLink.id = 'logo-link';
//   logoLink.href = '#content';

//   const logoImg = document.createElement('img');
//   logoImg.id = 'logo-img';
//   logoImg.src = restaurantLogo;
//   logoImg.alt = 'restaurant logo';

//   logoLink.appendChild(logoImg);

//   const navLinks = document.createElement('ul');
//   navLinks.classList.add('nav-links');

//   header.append(logoLink, navLinks);

//   // attributes for nav anchor elements
//   let navAnchorAttrs = [
//     {
//       'id': 'story',
//       'href': '#story',
//       'textContent': 'Our Story'
//     },
//     {
//       'id': 'menu',
//       'href': '#menu',
//       'textContent': 'Menu'
//     },
//     {
//       'id': 'locations',
//       'href': '#locations',
//       'textContent': 'Locations & Hours'
//     },
//     {
//       'id': 'contact',
//       'href': '#contact',
//       'textContent': 'Contact'
//     }
//   ];
//   for (let i = 0; i < navAnchorAttrs.length; i++) {
//     const navItem = document.createElement('li');
//     navItem.classList.add('nav-item');

//     const navAnchor = document.createElement('a');
//     setAttrs(navAnchor, navAnchorAttrs[i]);
    
//     navItem.append(navAnchor);
//     navLinks.append(navItem);
//   }

//   //**** page main content
//   const main = document.createElement('main');
//   const mainContent = document.createElement('div');
//   mainContent.id = 'main-content';
//   main.appendChild(mainContent);
  
//   const title = document.createElement('h1');
//   title.textContent = 'Pizzeria ';
//   mainContent.append(title);

//   const titleSpan = document.createElement('span');
//   titleSpan.id = 'title-span';
//   titleSpan.textContent = 'Michelangiolesca';
//   title.appendChild(titleSpan);

//   // restaurant review contents
//   let reviews = [
//     {
//       'class': 'quote',
//       'textContent': '"Roses are red, violets are blue, this pizza is delicious, I hope there\'s leftovers too!"',
//       'author': 'Chef Boyardee'
//     },
//     {
//       'class': 'quote',
//       'textContent': '"When your tummy is very hungry, go to Michelangiolesca for some pizza that\'s extra yummy!"',
//       'author': 'Chef Girlardee'
//     }
//   ]
//   for (let i = 0; i < reviews.length; i++) {
//     const quoteContainer = document.createElement('blockquote');

//     let para = document.createElement('p');
//     setReview(para, reviews[i], quoteContainer);

//     mainContent.append(quoteContainer);
//   }

//   //**** footer contents
//   const footer = document.createElement('footer');

//   const mediaContainer = document.createElement('div');
//   mediaContainer.id = 'media-container';

//   const anchorAttrs = [
//     {
//       'href': 'https://www.facebook.com/'
//     },
//     {
//       'href': 'https://www.instagram.com/'
//     },
//     {
//       'href': 'https://www.twitter.com/'
//     },
//     {
//       'href': 'https://www.linkedin.com/'
//     }
//   ]
//   const imageAttrs = [
//     {
//       'alt': 'facebook logo',
//       'src': facebookLogo
//     },
//     {
//       'alt': 'instagram logo',
//       'src': instagramLogo
//     },
//       {
//       'alt': 'twitter logo',
//       'src': twitterLogo
//     },
//       {
//       'alt': 'linkedin logo',
//       'src': linkedinLogo
//     },
//   ]

//   // add media container and media links
//   for (let i = 0; i < imageAttrs.length; i++) {
//     const mediaLink = document.createElement('a');
//     mediaLink.classList.add('media-link');
//     mediaLink.target = '_blank';
//     setAttrs(mediaLink, anchorAttrs[i]);

//     const mediaImg = document.createElement('img');
//     mediaImg.classList.add('media-img');
//     setAttrs(mediaImg, imageAttrs[i]);
//     mediaLink.appendChild(mediaImg);


//     mediaContainer.append(mediaLink);

//   }

//   // add credit container and link to github
//   const creditContainer = document.createElement('div');
//   creditContainer.id = 'credits';

//   const githubLink = document.createElement('a');
//   githubLink.id = 'github-link';
//   githubLink.href = 'https://github.com/dukdukg00se/restaurant-page';
//   githubLink.textContent = 'Created by dukdukg00se 2021';

//   const githubImage = document.createElement('img');
//   githubImage.src = githubLogo;
//   githubImage.alt = '';
//   githubImage.id = 'github-logo';

//   // when using img tag can't manipulate svg tag e.g. change fill attribute
//   // instead change img src for same effect    
//   githubLink.addEventListener('mouseenter', function() {
//     githubImage.src = githubLogoWhite;
//   });
//   githubLink.addEventListener('mouseleave', function() {
//     githubImage.src = githubLogo;
//   });

//   githubLink.append(githubImage);
//   creditContainer.append(githubLink);
//   footer.append(mediaContainer, creditContainer);
//   content.append(header, main, footer);
// }


// function setAttrs(elmnt, attrs) {
//   for (let key in attrs) {
//     key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);
//   }
// }

// function setReview(elmnt, attrs, elmntContainer) {
//   let cite;
//   for (let key in attrs) {
//     if (key === 'textContent') {
//       elmnt.textContent = attrs.textContent;
//     } else if (key === 'author') {
//       cite = document.createElement('cite');
//       cite.textContent = '-- ' + attrs.author;
//     } else {
//       elmnt.setAttribute(key, attrs[key]);
//     }
//   }
//   elmntContainer.append(elmnt, cite);
// }



/************************************************** 
Refactor above createHome function and break into more small, more manageable functions 
***************************************************/

const createHeader = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  header.id = 'header';

  const logoLink = document.createElement('a');
  logoLink.id = 'logo-link';
  logoLink.href = '#content';

  const logoImg = document.createElement('img');
  logoImg.id = 'logo-img';
  logoImg.src = restaurantLogo;
  logoImg.alt = 'restaurant logo';

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');

  // array of attributes for nav anchor elements
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
    setAttrs(navAnchor, navAnchorAttrs[i]);
    
    navItem.append(navAnchor);
    navLinks.append(navItem);
  }

  logoLink.appendChild(logoImg);
  header.append(logoLink, navLinks);
  content.appendChild(header);
};


const createMain = () => {
  const main = document.createElement('main');  

  content.appendChild(main);
};


const createFooter = () => {
  const content = document.querySelector('#content');
  const footer = document.createElement('footer');

    // add media container and media links
  const mediaContainer = document.createElement('div');
  mediaContainer.id = 'media-container';

  const mediaAnchorAttrs = [
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
  const mediaImageAttrs = [
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

  for (let i = 0; i < mediaImageAttrs.length; i++) {
    const mediaLink = document.createElement('a');
    mediaLink.classList.add('media-link');
    mediaLink.target = '_blank';
    setAttrs(mediaLink, mediaAnchorAttrs[i]);

    const mediaImg = document.createElement('img');
    mediaImg.classList.add('media-img');
    setAttrs(mediaImg, mediaImageAttrs[i]);

    mediaLink.appendChild(mediaImg);
    mediaContainer.appendChild(mediaLink);
  }

  // add credit container and link to github
  const creditContainer = document.createElement('div');
  creditContainer.id = 'credits';

  const githubLink = document.createElement('a');
  githubLink.id = 'github-link';
  githubLink.href = 'https://github.com/dukdukg00se/restaurant-page';
  githubLink.textContent = 'Created by dukdukg00se 2021';

  const githubImage = document.createElement('img');
  githubImage.src = githubLogo;
  githubImage.alt = '';
  githubImage.id = 'github-logo';

  // wan't to change img bkgrnd color on hover
  // but can't change svg fill attr when using img tag to insert svg
  // change img src for similar effect
  githubLink.addEventListener('mouseenter', function() {
    githubImage.src = githubLogoWhite;
  });
  githubLink.addEventListener('mouseleave', function() {
    githubImage.src = githubLogo;
  });

  githubLink.appendChild(githubImage);
  creditContainer.appendChild(githubLink);
  footer.append(mediaContainer, creditContainer);
  content.appendChild(footer);
};


function setAttrs(elmnt, attrs) {
  for (let key in attrs) {
    key === 'textContent' ? elmnt.textContent = attrs.textContent : elmnt.setAttribute(key, attrs[key]);
  }
}


const createHome = () => {
  createHeader();
  createMain();
  createFooter();
}


export {
  createHome
};
