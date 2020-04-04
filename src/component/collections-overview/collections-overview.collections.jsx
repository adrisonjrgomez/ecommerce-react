import React from "react";
import { withRouter } from "react-router-dom";

import "./collections-overview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ routeName, title, items, history, match }) => (
  <div className="collection-overview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionOverview);
