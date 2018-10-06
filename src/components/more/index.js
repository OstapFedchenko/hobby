import React from "react";
import PropTypes from "prop-types";

import Declension from "../../services/declension";

const More = ({ count, onClick }) => (
  <div className="hobbies-list__more" onClick={onClick}>
    еще {count} {Declension.convert(count)}
  </div>
);

More.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
};

export default More;
