import React, { useEffect, useState } from 'react';

interface ICategory {
    cat: string;
}

interface IMenuItem {
    [x: string]: any;
    name: string;
    description: string;
    cat: string;
    price: string;
}

const Menu = ({cat}: ICategory) => {
    
    const [filteredMenu, setFilteredMenu] = useState<IMenuItem[]>([]);

  const menuItems: IMenuItem[] = [
    { name: 'Mozzarella Caprese', description: 'Mozzarella Caprese', cat: "Vorspeisen", price: '$9.99' },
    { name: 'Carpaccio', description: 'Carpaccio', cat: "Vorspeisen", price: '$9.99' },
    { name: 'Minestrone', description: 'Minestrone', cat: "Suppen", price: '$15.99' },
    { name: 'Tomatensuppe', description: 'Tomatensuppe', cat: "Suppen", price: '$15.99' },
    { name: 'Pizza Toscana', description: 'Pizza Toscana', cat: "Pizza", price: '$6.99' },
    { name: 'Pizza Margherita', description: 'Pizza Margherita', cat: "Pizza", price: '$6.99' },
];

useEffect(() => {
    const filteredItems = menuItems.filter((item) => item.cat === cat);
    setFilteredMenu(filteredItems);
  }, [cat]);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-black">Speisekarte</h2>
      <h4>{cat}</h4>
      <ul>
      {filteredMenu.map((item: IMenuItem) => (
        <div key={item.name}>
        <h1 className='text-black'>{item.cat}</h1>
          <h2 className='text-black'>{item.name}</h2>
          <p className='text-black'>Price: {item.price}</p>
        </div>
      ))}
      </ul>
    </div>
  );
};


export default Menu;
