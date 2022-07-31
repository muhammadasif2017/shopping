import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
  const totalAmount = () => {
    const amount = items.reduce((totalSpend, { count, price }) => {
      return totalSpend + (count * price);
    }, 0)
    return amount;
  }
  return (
    <div>
      <ul className='CartPage-items'>
        {items.length > 0 ? 
          items.map(item =>
            <li key={item.id} className='CartPage-item'>
              <Item item={item}>
                <div className="CartItem-controls">
                  <button
                    className="CartItem-removeOne"
                    onClick={() => onRemoveOne(item)}>
                    &ndash;
                  </button> 
                  <span className="CartItem-count">{item.count}</span>
                  <button
                    className="CartItem-addOne"
                    onClick={() => onAddOne(item)}>
                    +
                  </button>
                </div>
              </Item>
            </li>
          ) : (
            <div className='NoCart'>
              <div>
                Your cart is empty.
              </div>
              <div>
                Why not add some expensive products to it?
              </div>
            </div>
          )
        }
      </ul>
      {items.length > 0 ? (
        <div className='CartTotal'>
          {`Total: $${totalAmount()}`}
        </div>
      ) : <></>}
    </div>
  );
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;