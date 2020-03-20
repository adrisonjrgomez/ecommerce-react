import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, id, img, size }) => (
  <div id={id} className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${img})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="title">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
