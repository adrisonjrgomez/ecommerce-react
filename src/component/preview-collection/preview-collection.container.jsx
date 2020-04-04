import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectisCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionPreview from "./preview-collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectisCollectionFetching,
});

const CollectionsPreviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPreview);

export default CollectionsPreviewContainer;
