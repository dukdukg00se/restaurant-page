import restaurantLogo from '../assets/images/restaurant-logo.png'; 
import facebookLogo from '../assets/images/facebook-logo.svg';
import instagramLogo from '../assets/images/instagram-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';
import linkedinLogo from '../assets/images/linkedin-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
import githubLogoWhite from '../assets/images/github-logo-white.svg';
import '../styles/reset.css';
import '../styles/home.css';

const createHeader = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  header.id = 'header';

  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = restaurantLogo;
  logo.alt = 'restaurant logo';

  const navList = document.createElement('ul');
  navList.id = 'nav-list';

  const navItemAttrs = [
    {
      id: 'home',
      textContent: 'Home'
    },
    {
      id: 'story',
      textContent: 'Our Story'
    },
    {
      id: 'menu',
      textContent: 'Menu'
    },
    {
      id: 'location-hours',
      textContent: 'Location & Hours'
    },
  ];
  navItemAttrs.forEach(itm => {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    setElmnt(navItem, itm);
    navList.append(navItem);
  })

  header.append(logo, navList);
  content.append(header);
}

const createMain = () => {
  const main = document.createElement('main');  

  content.appendChild(main);
};


const createFooter = () => {
  const content = document.querySelector('#content');
  const footer = document.createElement('footer');

  const mediaContainer = document.createElement('div');
  mediaContainer.id = 'media-container';

  const anchorAttrs = [
    {
      href: 'https://www.facebook.com/'
    },
    {
      href: 'https://www.instagram.com/'
    },
    {
      href: 'https://www.twitter.com/'
    },
    {
      href: 'https://www.linkedin.com/'
    }
  ]
  const imageAttrs = [
    {
      alt: 'facebook logo',
      src: facebookLogo
    },
    {
      alt: 'instagram logo',
      src: instagramLogo
    },
    {
      alt: 'twitter logo',
      src: twitterLogo
    },
    {
      alt: 'linkedin logo',
      src: linkedinLogo
    },
  ]

  for (let i = 0; i < imageAttrs.length; i++) {
    const mediaLink = document.createElement('a');
    mediaLink.classList.add('media-link');
    mediaLink.target = '_blank';
    setElmnt(mediaLink, anchorAttrs[i]);

    const mediaImg = document.createElement('img');
    mediaImg.classList.add('media-img');
    setElmnt(mediaImg, imageAttrs[i]);

    mediaLink.appendChild(mediaImg);
    mediaContainer.appendChild(mediaLink);
  }


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

  // want to change img bkgrnd color on hover
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

function setElmnt(elmnt, obj) {
  for (let key in obj) {
    switch(key) {
      case 'textContent':
        elmnt.textContent = obj[key];
        break;
      case 'span':
        const elmntSpan = document.createElement('span');
        setElmnt(elmntSpan, obj[key]);
        elmnt.append(elmntSpan);
        break;
      default:
        elmnt.setAttribute(key, obj[key]);
    }
  }
}

const createMnSubContnr = (parentCls, parentId, headerId, headerTxt) => {
  const parent = document.createElement('div');
  parent.classList.add(parentCls);
  parent.id = parentId;

  const parentHdr = document.createElement('h1');
  parentHdr.id = headerId;
  parentHdr.textContent = headerTxt;

  parent.append(parentHdr);

  return parent;
};


const createHome = () => {
  createHeader();
  createMain();
  createFooter();
}

export {
  createHome,
  createMnSubContnr,
  setElmnt
};