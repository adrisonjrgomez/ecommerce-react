import React from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";
import CollectionPreviewContainer from "../../component/preview-collection/preview-collection.container";

import { fecthCollectionStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.addCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionPreviewContainer}
        />
        <Route
          path={`${match.path}/:collection`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollections: (collections) => dispatch(fecthCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
