import React from "react";
import PropTypes from "prop-types";

import withMouseEvents from "../../hoc";

const MyHobby = ({
  name,
  isHovered,
  onMouseOver,
  onMouseOut,
  onDeleteMyHobby
}) => (
  <div
    className="hobbies-list__item"
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    {isHovered && (
      <div className="hobbies-list__item__remove" onClick={onDeleteMyHobby} />
    )}

    <div className="hobbies-list__item__value">
      {name}
      <div className="hobbies-list__item__value-decorated" />
    </div>
  </div>
);

MyHobby.propTypes = {
  name: PropTypes.string,
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onDeleteMyHobby: PropTypes.func
};

export default withMouseEvents(MyHobby);
