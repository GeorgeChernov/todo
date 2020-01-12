import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <div>
        Hello {props.name}!
    </div>
  );
}

export default Item;
