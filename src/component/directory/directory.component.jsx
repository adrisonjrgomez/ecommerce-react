import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections, history }) => (
  <div className="directory-menu">
    {console.log(sections)}
    {sections.map(({ id, linkUrl, ...sectionProps }) => (
      <MenuItem
        key={id}
        linkUrl={linkUrl}
        {...sectionProps}
        onClick={() => history.push(linkUrl)}
      ></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
