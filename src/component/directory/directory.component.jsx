import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ history }) => {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
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
};

export default Directory;
