import React from 'react';

import StarIcon from '../icons/star';

import './card.css';

function Card(props) {
  const {
    id,
    discounted,
    image,
    shopName,
    newPrice,
    oldPrice,
    discount,
    productName,
    rate,
    stock,
    sold,
  } = props;
  return (
    <div className="card">
      <span className="discounted">
        {`-${discounted}%`}
      </span>

      <div className="card-header">
        <img className="product-image" src={image} alt="Product" />
      </div>

      <div className="card-body">
        <h5 className="shop_name">{shopName}</h5>

        <p className="new_price">${newPrice}</p>

        <p className="old_price">${oldPrice}</p>

        <p className="discount">{discount}% off</p>

        <p className="product_name">{productName}</p>

        <div className="product_rate">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        <progress className="product_progress" value={sold} max={stock} />

        <p className="product_sold">Sold: {sold}</p>
      </div>
    </div>
  );
}

export default Card;