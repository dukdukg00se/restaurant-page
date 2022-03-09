import '../styles/menu.css';

const displayMenu = () => {
  const main = document.querySelector('main');

  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';
  main.append(menuContainer);

  const title = document.createElement('h1');
  title.id = 'menu-heading';
  title.textContent = 'Our Menu';
  menuContainer.append(title);

  /************************/
  
  /************************/

  let menu = [
    {
      section: 'Starters',
      type: 'descriptive',
      items: [
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
      addendum: ''
    },
    {
      section: 'Specialty Pies',
      type: 'descriptive',
      items: [
        {
          name: "House Favorite",
          description: "Sausage, Green Peppers, Onions And Mushrooms",
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
      ], 
      addendum: ''
    },
    {
      section: 'Create Your Own',
      type: 'table',
      items: [
        {
          tr1: ["&nbsp;", '8"', '12"', '16"'],
          tr2: ["&nbsp;", "4 Pcs", "8 Pcs", "12 Pcs"],
          tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
          tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
        }
      ],
      addendum: [
        {
          section: 'toppings',
          type: 'descriptive',
          items: [
            {
              name: 'Meat Toppings',
              description: "Pepperoni, Italian Sausage, Anchovies, Bacon, Canadian Bacon, Grilled Chicken Breast, Salami, Meatball",
              price: ''
            },
            {
              name: 'Veggie Toppings',
              description: 'Artichoke Hearts, Basil, Green Peppers, Jalapenos, Mushrooms, Black Olives, Red Onion, Pineapple, Sundried Tomato, Roma Tomato, Spinach, Pepperoncini, Fresh Garlic',
              price: ''
            }
          ],
          addendum: ''
        } 
      ]
    }
  ]


  menu.forEach(obj => {
    menuContainer
  })
  
  // menuContainer.insertBefore(title, menuContainer.firstChild);
  // main.append(menuContainer);
}

// function addMenuSection(menu, container) {
//   const sectionsArr = Object.keys(menu)

//   sectionsArr.forEach(section => {
//     const sectionContainer = document.createElement('div');
//     sectionContainer.classList.add('menu-section');

//     const sectionHeading = document.createElement('h2');
//     sectionHeading.textContent = section;  

//     const sectionBreak = document.createElement('hr');

//     sectionContainer.append(sectionHeading, sectionBreak);

//     menu[section].forEach(obj => {
//       addMenuItems(obj, sectionContainer, 'menu-item');
//     })
  
//     container.append(sectionContainer);
//   });
// }

function addSection(section, type, items, addendum, sectionClass) {
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add(sectionClass);

  const sectionHeading = document.createElement('h2');
  sectionHeading.textContent = section;

  const sectionBreak = document.createElement('hr');

  if (type === 'descripive') {
    items.forEach(item => {
      

    })
  }

  sectionContainer.append(sectionHeading, sectionBreak);
  return sectionContainer;
}

function addItem(name, description, price, itemClass) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add(itemClass);

  const itemName = document.createElement('h4');
  itemName.textContent = name;

  const itemDescr = document.createElement('p');
  itemDescr.textContent = description;

  const itemPrice = document.createElement('span');
  itemPrice.textContent = price;
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






// let fixedMenu = {
//   'Starters': [
//     {
//       name: "Mozzarella Sticks",
//       description: "Served with homemade marinara sauce",
//       price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
//     },
//     {
//       name: "Chicken Wings",
//       description:
//         "Plain, Mild, Spicy Teriyaki, BBQ, Super-Hot or Honey Buffalo. Served With Ranch",
//       price: "$12.99 (12 Pieces)"
//     },
//     {
//       name: "Garlic Breadsticks",
//       description: "Served with homemade marinara sauce",
//       price: "$6.99 (0.5 lb.) / $12.99 (1 lb.)"
//     },
//     {
//       name: "Potato Wedges",
//       description: "Served with Ranch",
//       price: "$6.49"
//     }
//   ],
//   'Specialty Pies': [
//     {
//       name: "House Favorite",
//       description: "Sausage, Green Peppers, Onions and Mushrooms",
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
//   ]
// }

// let customMenu = {
//   table: {
//     tr1: ["&nbsp;", '8"', '12"', '16"'],
//     tr2: ["&nbsp;", "4 Pcs", "8 Pcs", "12 Pcs"],
//     tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
//     tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
//   },
//   toppings: [
//     {
//       name: "Meat Toppings",
//       description:
//         "Pepperoni, Italian Sausage, Anchovies, Bacon, Canadian Bacon, Grilled Chicken Breast, Salami, Meatball"
//     },
//     {
//       name: "Veggie Toppings",
//       description:
//         "Artichoke Hearts, Basil, Green Peppers, Jalapenos, Mushrooms, Black Olives, Red Onion, Pineapple, Sundried Tomato, Roma Tomato, Spinach, Pepperoncini, Fresh Garlic"
//     }
//   ]
// };


// function addMenuSection(menu, container) {
//   const sectionsArr = Object.keys(menu)

//   sectionsArr.forEach(section => {
//     const sectionContainer = document.createElement('div');
//     sectionContainer.classList.add('menu-section');

//     const sectionHeading = document.createElement('h2');
//     sectionHeading.textContent = section;  

//     const sectionBreak = document.createElement('hr');

//     sectionContainer.append(sectionHeading, sectionBreak);

//     menu[section].forEach(obj => {
//       addMenuItems(obj, sectionContainer, 'menu-item');
//     })
  
//     container.append(sectionContainer);
//   });
// }

// function addMenuItems(itemObj, container, group) {
//   const itemInfoArr = Object.keys(itemObj);
//   console.log(itemInfoArr);
//   const itemContainer = document.createElement('div');
//   itemContainer.classList.add(group);

//   for (let i = 0; i < itemInfoArr.length; i++) {
//     if (itemInfoArr[i] === 'name') {
//       const itemName = document.createElement('h4');
//       itemName.textContent = itemObj[itemInfoArr[i]];
//       itemContainer.append(itemName);
//     } else if (itemInfoArr[i] === 'description') {
//       const itemDescription = document.createElement('p');
//       itemDescription.textContent = itemObj[itemInfoArr[i]];
//       itemContainer.append(itemDescription);
//     } else {
//       const itemPrice = document.createElement('span');
//       itemPrice.textContent = itemObj[itemInfoArr[i]];
//       itemContainer.append(itemPrice);
//     }
//   }
//   container.append(itemContainer);
// }

// function addMenuTable(menu, container) {
//   const sectionsArr = Object.keys(menu);

//   sectionsArr.forEach


// }

// let menu = [
  //   {
  //     section: 'Starters',
  //     type: 'descriptive',
  //     items: [
  //       {
  //         name: "Mozzarella Sticks",
  //         description: "Served with homemade marinara sauce",
  //         price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
  //       },
  //       {
  //         name: "Chicken Wings",
  //         description:
  //           "Plain, Mild, Spicy Teriyaki, BBQ, Super-Hot or Honey Buffalo. Served With Ranch",
  //         price: "$12.99 (12 Pieces)"
  //       },
  //       {
  //         name: "Garlic Breadsticks",
  //         description: "Served with homemade marinara sauce",
  //         price: "$6.99 (0.5 lb.) / $12.99 (1 lb.)"
  //       },
  //       {
  //         name: "Potato Wedges",
  //         description: "Served with Ranch",
  //         price: "$6.49"
  //       }
  //     ],
  //     addendum: ''
  //   },
  //   {
  //     section: 'Specialty Pies',
  //     type: 'descriptive',
  //     items: [
  //       {
  //         name: "House Favorite",
  //         description: "Sausage, Green Peppers, Onions And Mushrooms",
  //         price: '8" $13.99 / 12" $19.99 / 16" 24.99'
  //       },
  //       {
  //         name: "The Pig",
  //         description: "Spicy Pepperoni, Soppressata, Italian Sausage",
  //         price: '8" $13.99 / 12" $19.99 / 16" 24.99'
  //       },
  //       {
  //         name: "Funghi",
  //         description: "Roasted Mushroom, Cipollini Onion, Smoked Mozzarella",
  //         price: '8" $12.99 / 12" $18.99 / 16" 23.99'
  //       },
  //       {
  //         name: "Cacio E Pepe",
  //         description: "Pecorino Crema, Mozzarella, Cracked Pepper",
  //         price: '8" $12.99 / 12" $18.99 / 16" 23.99'
  //       }
  //     ], 
  //     addendum: ''
  //   },
  //   {
  //     section: 'Create Your Own',
  //     type: 'table',
  //     items: [
  //       {
  //         tr1: ["&nbsp;", '8"', '12"', '16"'],
  //         tr2: ["&nbsp;", "4 Pcs", "8 Pcs", "12 Pcs"],
  //         tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
  //         tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
  //       }
  //     ],
  //     addendum: [
  //       {
  //         section: 'Meat Toppings',
  //         type: 'descriptive',
  //         items: [
  //           "Pepperoni",
  //           "Italian Sausage",
  //           "Anchovies",
  //           "Bacon",
  //           "Canadian Bacon",
  //           "Grilled Chicken Breast",
  //           "Salami",
  //           "Meatball"
  //         ]
  //       },
  //       {
  //         section: 'Meat Toppings',
  //         type: 'descriptive',
  //         items: [
  //           "Artichoke Hearts",
  //           "Basil",
  //           "Green Peppers",
  //           "Jalapenos",
  //           "Mushrooms",
  //           "Black Olives",
  //           "Red Onion",
  //           "Pineapple",
  //           "Sundried Tomato",
  //           "Roma Tomato",
  //           "Spinach",
  //           "Pepperoncini",
  //           "Fresh Garlic"
  //         ]
  //       } 
  //     ]
  //   }
  // ]