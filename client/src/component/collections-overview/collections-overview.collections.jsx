import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./collections-overview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ routeName, title, items }) => {
  let history = useHistory();
  let match = useRouteMatch();
  return (
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
};
export default CollectionOverview;
