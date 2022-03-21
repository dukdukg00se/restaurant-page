// import images 
import restaurantLogo from '../assets/images/restaurant-logo.png'; 
import facebookLogo from '../assets/images/facebook-logo.svg';
import instagramLogo from '../assets/images/instagram-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';
import linkedinLogo from '../assets/images/linkedin-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
import githubLogoWhite from '../assets/images/github-logo-white.svg';

// import reset and page style files
import '../styles/reset.css';
import '../styles/home.css';

// create page header w/ site nav links 
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

  // array w/ nav item attributes and content
  const navItemsArr = [
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

  for (let i = 0; i < navItemsArr.length; i++) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    setAttrs(navItem, navItemsArr[i]);
    navList.append(navItem);
  }

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

export default createHome;