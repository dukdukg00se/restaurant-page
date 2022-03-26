import {createMnSubContnr} from './home.js';
import '../styles/story.css';

// Function appends Our Story content to main element
const displayStory = () => {
  const main = document.querySelector('main');
  main.append(
    createMnSubContnr(
      'main-contnt',
      'story-contnr',
      'story-heading',
      'Our Story'
    )
  );

  const paraOne = document.createElement('p');
  paraOne.classList.add('story');
  paraOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Lorem ipsum dolor sit amet consectetur. Morbi tristique senectus et netus et malesuada fames ac. Sed faucibus turpis in eu mi bibendum neque egestas. Nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt eget nullam non nisi est sit amet facilisis magna. Pretium aenean pharetra magna ac placerat vestibulum. Ultricies leo integer malesuada nunc vel risus. Nec nam aliquam sem et tortor consequat id porta. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. In fermentum posuere urna nec tincidunt praesent semper feugiat. Massa id neque aliquam vestibulum morbi blandit cursus risus. In est ante in nibh. Scelerisque varius morbi enim nunc faucibus a.';
  
  const paraTwo = document.createElement('p');
  paraTwo.classList.add('story');
  paraTwo.textContent = 'Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Amet nisl purus in mollis nunc. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Dignissim diam quis enim lobortis scelerisque fermentum dui. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. In nulla posuere sollicitudin aliquam ultrices sagittis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Sit amet cursus sit amet dictum. Nisl tincidunt eget nullam non nisi est. Donec enim diam vulputate ut pharetra sit amet aliquam. Felis imperdiet proin fermentum leo vel orci porta. At auctor urna nunc id cursus metus. Consectetur lorem donec massa sapien faucibus. Lobortis mattis aliquam faucibus purus. Duis at tellus at urna condimentum.';

  const subContnr = document.querySelector('#story-contnr'); 
  subContnr.append(paraOne, paraTwo);
}

export default displayStory;