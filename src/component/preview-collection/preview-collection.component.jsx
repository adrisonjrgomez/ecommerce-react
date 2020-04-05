import React from "react";
import "./preview-collection.styles.scss";
import CollectionOverview from "../collections-overview/collections-overview.collections";
import {
  selectShopDataArray,
} from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

const CollectionPreview = () => {
  const collections = useSelector(selectShopDataArray);
  return (
    <div className="collection-preview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionOverview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};


export default CollectionPreview;
