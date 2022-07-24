import React from 'react';

const Menu = ({ menuItem }) => {
    // console.log(menuItem);
    const {  desc , img , price , title} = menuItem;
  return (
    <div className="menu-item" style={{margin: '0 auto'}}>
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;