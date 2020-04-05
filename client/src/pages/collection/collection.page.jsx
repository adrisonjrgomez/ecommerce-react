import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors.js";
import CollectionItem from "../../component/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ match, collection: { title, items } }) => (
  <div className="collection-page">
    {title ? <h2 className="title">{title}</h2> : <h2 className="title"> Something Happen </h2>}
    <div className="items-preview">
      {items ? (
        items.map(item => <CollectionItem key={item.id} item={item} />)
      ) : (
        <p className="message-error">This Category is unenabled yet.</p>
      )}
    </div>
  </div>
);
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collection)(state)
});

export default connect(mapStateToProps)(CollectionPage);
