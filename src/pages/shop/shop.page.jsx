import React from "react";

import { Route } from "react-router-dom";
import CollectionPreview from '../../component/preview-collection/preview-collection.component';
import categoryPage from "../collection/collection.page";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionPreview} />
    <Route path={`${match.path}/:collection`} component={categoryPage} />
  </div>
);

export default ShopPage;
