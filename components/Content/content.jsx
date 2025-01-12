import React from "react";
import "./content.css";

const Content = () => {
  const products = [
    {
        id: 1,
        category: "MEN",
        title: "Man's Outdoor Jacket",
        price: "$355.00",
        oldPrice: "$400.00",
        discount: "-15%",
        image: "../../src/img/jacket1.png",
        rating: 4.5,
    },
    {
        id: 2,
        category: "MEN",
        title: "Man's Casual Jacket",
        price: "$250.00",
        oldPrice: "$300.00",
        discount: "-17%",
        image: "../../src/img/jacket2.png",
        rating: 4.0,
    },
    {
        id: 3,
        category: "MEN",
        title: "Man's Casual Shirt",
        price: "$120.00",
        oldPrice: "$180.00",
        discount: "-33%",
        image: "../../src/img/shirt1.png",
        rating: 5.0,
    },
    {
        id: 4,
        category: "MEN",
        title: "Man's Casual Shirt",
        price: "$150.00",
        oldPrice: "$200.00",
        discount: "-25%",
        image: "../../src/img/shirt2.png",
        rating: 4.0,
    },
    {
        id: 5,
        category: "MEN",
        title: "Man's Casual Shirt",
        price: "$150.00",
        oldPrice: "$200.00",
        discount: "-25%",
        image: "../../src/img/shirt3.png",
        rating: 4.0,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <ul className="review-star">
        {[...Array(fullStars)].map((_, i) => (
          <li key={`full-${i}`} className="fill">
            <span className="material-icons">star</span>
          </li>
        ))}
        {hasHalfStar && (
          <li className="fill">
            <span className="material-icons">star_half</span>
          </li>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <li key={`empty-${i}`} className="empty">
            <span className="material-icons">star_outline</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="Content">
      <div className="section-title text-center">
        <h2>WEEKLY OFFERS!</h2>
        <p className=""></p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-single-item-style-1 swiper-slide"
          >
            <a href="product-details-default.html" className="image img-responsive">
              <img
                className="img-fluid"
                src={product.image}
                alt="product-image"
                loading="lazy"
              />
              <ul className="tooltip-tag-items">
                <li className="color-green">{product.discount}</li>
              </ul>
            </a>
            <div className="content">
              <div className="top">
                <span className="category">{product.category}</span>
                <h4 className="title">
                  <a href="product-details-default.html">{product.title}</a>
                </h4>
                <span className="price">
                  {product.price} <del>{product.oldPrice}</del>
                </span>
              </div>
              <div className="bottom">
                {renderStars(product.rating)}
                <div className="product-event-items">
                  <button className="btn cart-btn">
                    Add to cart
                  </button>
                  <a href="wishlist.html" className="btn wishlist-btn">
                    <span className="material-icons">favorite_border</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all">VIEW ALL PRODUCT</button>
      <div className="cashback-container">
        <img src="../../src/img/cashback.png" alt="cashback" />
      </div>
    </div>
  );
};

export default Content;
