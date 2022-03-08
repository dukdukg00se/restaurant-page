import '../styles/menu.css';

const displayMenu = () => {
  const main = document.querySelector('main');

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';

  const title = document.createElement('h1');
  title.id = 'menu-heading';
  title.textContent = 'Our Menu';

  /************************/
  
  /************************/

  let fixedMenu = {
    'Starters': [
      {
        name: "Mozzarella Sticks",
        description: "Served with homemade marinara sauce",
        price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
      },
      {
        name: "Chicken Wings",
        description:
          "Plain, Mild, Spicy Teriyaki, BBQ, Super-Hot or Honey Buffalo. Served With Ranch",
        price: "$12.99 (12 Pieces)"
      },
      {
        name: "Garlic Breadsticks",
        description: "Served with homemade marinara sauce",
        price: "$6.99 (0.5 lb.) / $12.99 (1 lb.)"
      },
      {
        name: "Potato Wedges",
        description: "Served with Ranch",
        price: "$6.49"
      }
    ],
    'Specialty Pies': [
      {
        name: "House Favorite",
        description: "Sausage, Green Peppers, Onions and Mushrooms",
        price: '8" $13.99 / 12" $19.99 / 16" 24.99'
      },
      {
        name: "The Pig",
        description: "Spicy Pepperoni, Soppressata, Italian Sausage",
        price: '8" $13.99 / 12" $19.99 / 16" 24.99'
      },
      {
        name: "Funghi",
        description: "Roasted Mushroom, Cipollini Onion, Smoked Mozzarella",
        price: '8" $12.99 / 12" $18.99 / 16" 23.99'
      },
      {
        name: "Cacio E Pepe",
        description: "Pecorino Crema, Mozzarella, Cracked Pepper",
        price: '8" $12.99 / 12" $18.99 / 16" 23.99'
      }
    ]
  }



  menuContainer.append(createMenuSection(fixedMenu, 'menu-section', 'menu-item'));
  


  menuContainer.insertBefore(title, menuContainer.firstChild);
  main.append(menuContainer);
}


function createMenuSection(menu, sectionClass, itemClass) {
  const sectionsArr = Object.keys(menu);
  // console.log(sections);

  sectionsArr.map(section => {
    // console.log(section);
    // console.log(menu[section]);

    const sectionContainer = document.createElement('div');
    sectionContainer.classList.add(sectionClass);

    const sectionHeading = document.createElement('h2');
    sectionHeading.textContent = section;

    // menu[section].map(item => {
    //   console.log(item.name);
    //   for (let key in item) {
    //     console.log(key);
    //   }
    // })

    sectionContainer.append(sectionHeading);
    
    console.log(sectionContainer);
    
  })



  return sectionContainer;
}

export default displayMenu;



// let menu = {
//   'Starters': [
//     {
//       name: "Mozarella Sticks",
//       description: "Served with home made marinara sauce",
//       price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
//     },
//     {
//       name: "Chicken Wings",
//       description:
//         "Plain, Mild, Spicy Teriyaki, Bbq, Super Hot Or Honey Buffalo. Served With Ranch",
//       price: "$12.99 (12 Pieces)"
//     },
//     {
//       name: "Garlic Breadsticks",
//       description: "Served with home made marinara sauce",
//       price: "$6.99 (0.5 lb) / $12.99 (1 lb)"
//     },
//     {
//       name: "Potato Wedges",
//       description: "Served With Ranch",
//       price: "$6.49"
//     }
//   ],
//   'Specialty Pies': [
//     {
//       name: "House Favorite",
//       description: "Sausage, Green Peppers, Onions And Mushrooms",
//       price: '8" $13.99 / 12" $19.99 / 16" 24.99'
//     },
//     {
//       name: "The Pig",
//       description: "Spicy Pepperoni, Soppressata, Italian Sausage",
//       price: '8" $13.99 / 12" $19.99 / 16" 24.99'
//     },
//     {
//       name: "Funghi",
//       description: "Roasted Mushroom, Cipollini Onion, Smoked Mozzarella",
//       price: '8" $12.99 / 12" $18.99 / 16" 23.99'
//     },
//     {
//       name: "Cacio E Pepe",
//       description: "Pecorino Crema, Mozzarella, Cracked Pepper",
//       price: '8" $12.99 / 12" $18.99 / 16" 23.99'
//     }
//   ],
//   'Create Your Own': [
//     {
//       tr1: ['', '8"', '12"', '16"'],
//       tr2: ['', '4 Pcs', '8 Pcs', '12 Pcs'],
//       tr3: ['Cheese', '$10.25', '$16.25', '$21.25'],
//       tr4: ['Topping', '$1.50', '$2.00', '$3.00']
//     }
//   ]
// };
// function createMenu(obj) {
//   let menuSections = Object.keys(obj); // Starters, Specialty Pies, Create Your Own  

//   for (let i = 0; i < menuSections.length; i++) {
//     const menuSection = document.createElement('div');
//     menuSection.classList.add('menu-section'); 
    
//     const sectionHeading = document.createElement('h2');
//     sectionHeading.textContent = menuSections[i];

//     const sectionBreak = document.createElement('hr');

//     menuSection.append(sectionHeading, sectionBreak);

//     // console.log(obj[menuSections[i]]);

//     for (let j = 0; j < obj[menuSections[i]].length; j++) {
//       const menuItem = document.createElement('div');
      
//       if (menuSections[i] !== 'Create Your Own') {
//         menuItem.classList.add('menu-item');
//         for (let key in obj[menuSections[i]][j]) {

//           // console.log(obj[menuSections[i]][j][key]);
//           // console.log(obj[menuSections[i]][j]);
//           // console.log(key);

//           if (key === 'name') {
//             const itemName = document.createElement('h4');
//             itemName.textContent = obj[menuSections[i]][j][key];

//             menuItem.append(itemName);
//             // console.log(obj[menuSections[i]][j][key]);
//           } else if (key === 'description') {
//             const description = document.createElement('p');
//             description.textContent = obj[menuSections[i]][j][key];

//             menuItem.append(description);
//           } else {
//             const price = document.createElement('span');
//             price.textContent = obj[menuSections[i]][j][key];

//             menuItem.append(price);
//           }

//         }
//       } else {
//         menuItem.classList.add('create');
//         const optionsChart = document.createElement('table');
        
//         menuItem.append(optionsChart);
        
//         for (let key in obj[menuSections[i]][j]) {
//           // console.log(obj[menuSections[i]][j][key]);
//           console.log(key);

//           const row = document.createElement('tr');
//           optionsChart.append(row);

//           obj[menuSections[i]][j][key].map((item) => {
//             const data = document.createElement('td');
//             data.textContent = item;
//             row.append(data);
//           });
//         }

//       }
//       menuSection.append(menuItem);
//     }


//     menuContainer.append(menuSection);
//   }
// }
// createMenu(menu);  



