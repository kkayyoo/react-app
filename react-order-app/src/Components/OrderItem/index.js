import React, { Component } from 'react';
import './style.scss';

class OrderItem extends Component {
  render() {
    const { shop, product, price, pic, isReviewed } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__imgWrapper">
          <img src={pic} alt={product} />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__info">
            <h3 className="orderItem__product">{product}</h3>
            <h5 className="orderItem__shop">{shop}</h5>
          </div>
          <div className="orderItem__price">${price}</div>
        </div>
        <div className="orderItem__action">
          {
            isReviewed ? (
              <button className="orderItem__review orderItem__review--red">Reviewed</button>
            ) : (
              <button className="orderItem__review orderItem__review--gray">Write Review</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default OrderItem;