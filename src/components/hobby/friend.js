import React from "react";
import PropTypes from "prop-types";

import withMouseEvents from "../../hoc";

const FriendHobby = ({
  name,
  isAdded,
  isHovered,
  onMouseOver,
  onMouseOut,
  addFriendHobby,
  onComplainClick
}) => (
  <div
    className={`hobbies-list__item ${
      isAdded ? "hobbies-list__item_selected" : ""
    }`}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    {isHovered &&
      !isAdded && (
        <div className="hobbies-list__item__add" onClick={addFriendHobby} />
      )}

    <div className="hobbies-list__item__value">
      {name}
      <div className="hobbies-list__item__value-decorated" />
    </div>

    {isAdded && (
      <div className="hobbies-list__item__added">
        добавлено в ваши увлечения
      </div>
    )}

    {isHovered && (
      <div className="hobbies-list__item__complain" onClick={onComplainClick}>
        пожаловаться
      </div>
    )}
  </div>
);

FriendHobby.propTypes = {
  name: PropTypes.string,
  isAdded: PropTypes.bool,
  isHovered: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  addFriendHobby: PropTypes.func,
  onComplainClick: PropTypes.func
};

export default withMouseEvents(FriendHobby);
