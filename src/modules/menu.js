import {createMnSubContnr} from './home.js';
import '../styles/menu.css';

// Constructor to create new menu sections
function Section(sctn, type, itms, adndm) {
  this.section = sctn;
  this.type = type;
  this.items = itms;
  this.addendum = adndm;
}

Section.prototype.classTitle = 'menu-sctn';

// Function appends "Menu" content to "main" element
const displayMenu = () => {
  const main = document.querySelector('main');
  main.append(
    createMnSubContnr(
      'main-contnt',
      'menu-contnr',
      'menu-heading',
      'Our Menu'
    )
  );

  // Array to hold different menu sections
  let menu = [];

  // starters, specials, create are the three menu sections
  let starters = new Section(
    'Starters', 
    'descriptive', 
    [
      {
        name: "Mozzarella Sticks",
        classTitle: 'menu-item',
        description: "Served with homemade marinara sauce",
        price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
      },
      {
        name: "Chicken Wings",
        classTitle: 'menu-item',
        description:
          "Plain, Mild, Spicy Teriyaki, BBQ, Super-Hot or Honey Buffalo. Served With Ranch",
        price: "$12.99 (12 Pieces)"
      },
      {
        name: "Garlic Breadsticks",
        classTitle: 'menu-item',
        description: "Served with homemade marinara sauce",
        price: "$6.99 (0.5 lb.) / $12.99 (1 lb.)"
      },
      {
        name: "Potato Wedges",
        classTitle: 'menu-item',
        description: "Served with Ranch",
        price: "$6.49"
      }
    ], 
    []
  );

  let specials = new Section(
    'Specialty Pies', 
    'descriptive',
    [
      {
        name: "House Favorite",
        classTitle: 'menu-item',
        description: "Sausage, Green Peppers, Onions And Mushrooms",
        price: '8" $13.99 / 12" $19.99 / 16" 24.99'
      },
      {
        name: "The Pig",
        classTitle: 'menu-item',
        description: "Spicy Pepperoni, Soppressata, Italian Sausage",
        price: '8" $13.99 / 12" $19.99 / 16" 24.99'
      },
      {
        name: "Funghi",
        classTitle: 'menu-item',
        description: "Roasted Mushroom, Cipollini Onion, Smoked Mozzarella",
        price: '8" $12.99 / 12" $18.99 / 16" 23.99'
      },
      {
        name: "Cacio E Pepe",
        classTitle: 'menu-item',
        description: "Pecorino Crema, Mozzarella, Cracked Pepper",
        price: '8" $12.99 / 12" $18.99 / 16" 23.99'
      }
    ],
    []
  ) 

  let create = new Section(
    'Create Your Own', 
    'table',
    [
      {
        classTitle: 'create',
        tr1: ["", '8"', '12"', '16"'],
        tr2: ["", "4 Pcs", "8 Pcs", "12 Pcs"],
        tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
        tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
      }
    ],
    [
      {
        classTitle: 'toppings-contnr',
        type: 'descriptive',
        items: [
          {
            name: 'Meat Toppings',
            classTitle: 'toppings',
            description: "Pepperoni, Italian Sausage, Anchovies, Bacon, Canadian Bacon, Grilled Chicken Breast, Salami, Meatball",
          },
          {
            name: 'Veggie Toppings',
            classTitle: 'toppings',
            description: 'Artichoke Hearts, Basil, Green Peppers, Jalapenos, Mushrooms, Black Olives, Red Onion, Pineapple, Sundried Tomato, Roma Tomato, Spinach, Pepperoncini, Fresh Garlic',
          }
        ]
      }
    ]
  )

  menu.push(starters, specials, create);

  const subContnr = document.querySelector('#menu-contnr');

  menu.forEach(section => {
    subContnr.append(createSctn(section));
  });
}

// Helper functions
function createSctn(obj) {
  const sectionContnr = document.createElement('div');
  sectionContnr.classList.add(obj.classTitle);

  const sectionHdng = document.createElement('h2');
  sectionHdng.textContent = obj.section;

  const sectionBrk = document.createElement('hr');
  sectionContnr.append(sectionHdng, sectionBrk);

  if (obj.type === 'descriptive') {
    obj.items.forEach(itm => {
      sectionContnr.append(createItm(itm));
    })
  }

  if (obj.type === 'table') {
    obj.items.forEach(itm => {
      sectionContnr.append(createTbl(itm));
    })
  }

  if (obj.addendum.length > 0) {
    obj.addendum.forEach(adndm => {
      sectionContnr.append(createAdndm(adndm));
    })
  }

  return sectionContnr;
}

function createItm(obj) {
  const itemContnr = document.createElement('div');
  itemContnr.classList.add(obj.classTitle);

  if (obj.name) {
    const itemName = document.createElement('h4');
    itemName.textContent = obj.name;
    itemContnr.append(itemName);
  }
  
  if (obj.description) {
    const itemDescr = document.createElement('p');
    itemDescr.textContent = obj.description;
    itemContnr.append(itemDescr);
  }
  
  if (obj.price) {
    const itemPrice = document.createElement('span');
    itemPrice.textContent = obj.price;
    itemContnr.append(itemPrice);
  }

  return itemContnr;  
}

function createTbl(obj) {
  const tableContnr = document.createElement('div');
  tableContnr.classList.add(obj.classTitle);

  const table = document.createElement('table');
  tableContnr.append(table);
  
  const tableKeys = Object.keys(obj); 

  tableKeys.forEach(key => {
    if (key !== 'classTitle') {
      const tableRow = document.createElement('tr');
      obj[key].forEach(value => {
        const tableData = document.createElement('td');
        tableData.textContent = value;
        tableRow.append(tableData);
      })
      table.append(tableRow);
    }
  })

  return tableContnr;
}

function createAdndm(obj) {
  const addendumContnr = document.createElement('div');
  addendumContnr.classList.add(obj.classTitle);

  if (obj.type === 'descriptive') {
    obj.items.forEach(itm => {
      addendumContnr.append(createItm(itm));
    });
  } else if (obj.type === 'table') {
    obj.items.forEach(itm => {
      addendumContnr.append(createTbl(itm));
    });
  }

  return addendumContnr;
}

export default displayMenu;

/** 
* Practice using constructors 
* Use Section constructor to replace hardcoded menu array
* Can also add an item constructor 
*/
// let menu = [
//   {
//     section: 'Starters',
//     classTitle: 'menu-sctn',
//     type: 'descriptive',
//     items: [
//       {
//         name: "Mozzarella Sticks",
//         classTitle: 'menu-item',
//         description: "Served with homemade marinara sauce",
//         price: "$7.99 (6 Pieces) / $13.99 (12 Pieces)"
//       },
//       {
//         name: "Chicken Wings",
//         classTitle: 'menu-item',
//         description:
//           "Plain, Mild, Spicy Teriyaki, BBQ, Super-Hot or Honey Buffalo. Served With Ranch",
//         price: "$12.99 (12 Pieces)"
//       },
//       {
//         name: "Garlic Breadsticks",
//         classTitle: 'menu-item',
//         description: "Served with homemade marinara sauce",
//         price: "$6.99 (0.5 lb.) / $12.99 (1 lb.)"
//       },
//       {
//         name: "Potato Wedges",
//         classTitle: 'menu-item',
//         description: "Served with Ranch",
//         price: "$6.49"
//       }
//     ],
//     addendum: []
//   },
//   {
//     section: 'Specialty Pies',
//     classTitle: 'menu-sctn',
//     type: 'descriptive',
//     items: [
//       {
//         name: "House Favorite",
//         classTitle: 'menu-item',
//         description: "Sausage, Green Peppers, Onions And Mushrooms",
//         price: '8" $13.99 / 12" $19.99 / 16" 24.99'
//       },
//       {
//         name: "The Pig",
//         classTitle: 'menu-item',
//         description: "Spicy Pepperoni, Soppressata, Italian Sausage",
//         price: '8" $13.99 / 12" $19.99 / 16" 24.99'
//       },
//       {
//         name: "Funghi",
//         classTitle: 'menu-item',
//         description: "Roasted Mushroom, Cipollini Onion, Smoked Mozzarella",
//         price: '8" $12.99 / 12" $18.99 / 16" 23.99'
//       },
//       {
//         name: "Cacio E Pepe",
//         classTitle: 'menu-item',
//         description: "Pecorino Crema, Mozzarella, Cracked Pepper",
//         price: '8" $12.99 / 12" $18.99 / 16" 23.99'
//       }
//     ], 
//     addendum: []
//   },
//   {
//     section: 'Create Your Own',
//     classTitle: 'menu-sctn',
//     type: 'table',
//     items: [
//       {
//         classTitle: 'create',
//         tr1: ["", '8"', '12"', '16"'],
//         tr2: ["", "4 Pcs", "8 Pcs", "12 Pcs"],
//         tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
//         tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
//       }
//     ],
//     addendum: [
//       {
//         classTitle: 'toppings-contnr',
//         type: 'descriptive',
//         items: [
//           {
//             name: 'Meat Toppings',
//             classTitle: 'toppings',
//             description: "Pepperoni, Italian Sausage, Anchovies, Bacon, Canadian Bacon, Grilled Chicken Breast, Salami, Meatball",
//           },
//           {
//             name: 'Veggie Toppings',
//             classTitle: 'toppings',
//             description: 'Artichoke Hearts, Basil, Green Peppers, Jalapenos, Mushrooms, Black Olives, Red Onion, Pineapple, Sundried Tomato, Roma Tomato, Spinach, Pepperoncini, Fresh Garlic',
//           }
//         ]
//       }
//     ]
//   }
// ]
