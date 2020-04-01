import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./preview-collection.styles.scss";
import CollectionOverview from "../collections-overview/collections-overview.collections";
import { selectShopDataArray } from "../../redux/shop/shop.selectors";

const CollectionPreview = ({ collections }) => (
  <div className="collection-preview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionOverview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataArray
});

export default connect(mapStateToProps)(CollectionPreview);
