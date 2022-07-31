import React from 'react';

const Nav = ({ activeTab, onTabChange }) => {
  const itemsClass = tabName => 
    `App-nav-item ${
      activeTab === tabName ? 'selected' : ''
    }`;

  return (
    <nav className='App-nav'>
      <ul>
        <li className={itemsClass('items')}>
          <button onClick={() => onTabChange('items')}>
            Items
          </button>
        </li>
        <li className={itemsClass('cart')}>
          <button onClick={() => onTabChange('cart')}>
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;