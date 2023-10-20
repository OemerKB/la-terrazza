'use client'

import React, { useState } from 'react';
import Menu from './Menu';

const CategorySelect: React.FC = () => {
    const categories = ['Alle', 'Vorspeisen', 'Suppen', 'Pizza'];
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); 
  };

  return (
    <div>
      <h2>Wählen Sie eine Kategorie aus:</h2>
      <ul>
        <li>
          <button onClick={() => handleCategoryChange('Alle')}>Alle</button>
        </li>
        <li>
          <button onClick={() => handleCategoryChange('Vorspeisen')}>Vorspeisen</button>
        </li>
        <li>
          <button onClick={() => handleCategoryChange('Suppen')}>Suppen</button>
        </li>
        <li>
          <button onClick={() => handleCategoryChange('Pizza')}>Pizza</button>
        </li>
      </ul>
      {selectedCategory && (
        <div>
          <h3>{selectedCategory}</h3>
          {<Menu cat={selectedCategory} />}
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
