import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subTitle }) => (
  <React.Fragment>
    <div className="hobbies__header">{title}</div>
    <div className="hobbies__subheader">
      <div className="hobbies__subheader__text">{subTitle}</div>
      <div className="hobbies__subheader-decorator" />
    </div>
  </React.Fragment>
);

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Header;
