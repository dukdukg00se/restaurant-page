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

  let menu = [
    {
      section: 'Starters',
      classTitle: 'menu-section',
      type: 'descriptive',
      items: [
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
      addendum: []
    },
    {
      section: 'Specialty Pies',
      classTitle: 'menu-section',
      type: 'descriptive',
      items: [
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
      addendum: []
    },
    {
      section: 'Create Your Own',
      classTitle: 'menu-section',
      type: 'table',
      items: [
        {
          classTitle: 'create',
          tr1: ["", '8"', '12"', '16"'],
          tr2: ["", "4 Pcs", "8 Pcs", "12 Pcs"],
          tr3: ["Cheese", "$10.25", "$16.25", "$21.25"],
          tr4: ["Topping", "$1.50", "$2.00", "$3.00"]
        }
      ],
      addendum: [
        {
          classTitle: 'toppings-container',
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
    }
  ]

  menu.forEach(section => {
    menuContainer.append(addSctn(section));
  })
}

function addSctn(obj) {
  const sctnContainer = document.createElement('div');
  sctnContainer.classList.add(obj.classTitle);

  const sctnHeading = document.createElement('h2');
  sctnHeading.textContent = obj.section;

  const sctnBreak = document.createElement('hr');
  sctnContainer.append(sctnHeading, sctnBreak);

  if (obj.type === 'descriptive') {
    obj.items.forEach(item => {
      sctnContainer.append(addItem(item));
    })
  }

  if (obj.type === 'table') {
    obj.items.forEach(item => {
      sctnContainer.append(addTable(item));
    })
  }

  if (obj.addendum.length > 0) {
    obj.addendum.forEach(obj => {
      sctnContainer.append(addAddendum(obj));
    })
  }

  return sctnContainer;
}

function addItem(item) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add(item.classTitle);

  if (item.name) {
    const itemName = document.createElement('h4');
    itemName.textContent = item.name;
    itemContainer.append(itemName);
  }
  
  if (item.description) {
    const itemDescr = document.createElement('p');
    itemDescr.textContent = item.description;
    itemContainer.append(itemDescr);
  }
  
  if (item.price) {
    const itemPrice = document.createElement('span');
    itemPrice.textContent = item.price;
    itemContainer.append(item.price);
  }

  return itemContainer;  
}

function addTable(tableObj) {
  const tableContainer = document.createElement('div');
  tableContainer.classList.add(tableObj.classTitle);

  const table = document.createElement('table');
  
  const tableKeys = Object.keys(tableObj); // [classTitle, tr1, tr2, tr3, tr4]

  tableKeys.forEach(key => {
    if (key !== 'classTitle') {
      const tableRow = document.createElement('tr');
      tableObj[key].forEach(value => {
        const tableData = document.createElement('td');
        tableData.textContent = value;
        tableRow.append(tableData);
      })
      table.append(tableRow);
    }
  })
  tableContainer.append(table);

  return tableContainer;
}

function addAddendum(obj) {
  const addendumContainer = document.createElement('div');
  addendumContainer.classList.add(obj.classTitle);

  if (obj.type === 'descriptive') {
    obj.items.forEach(item => {
      addendumContainer.append(addItem(item));
    });
  } else if (obj.type === 'table') {
    obj.items.forEach(item => {
      addendumContainer.append(addTable(item));
    });
  }

  return addendumContainer;
}

export default displayMenu;


