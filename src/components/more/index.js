import React from "react";
import PropTypes from "prop-types";

import TitlesDeclension from "../../services/titlesDeclension";

const More = ({ count, onClick }) => (
  <div className="hobbies-list__more" onClick={onClick}>
    еще {count} {TitlesDeclension.convert(count)}
  </div>
);

More.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
};

export default More;
