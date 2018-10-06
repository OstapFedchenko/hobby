import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalComplain = ({ content, onClose }) => (
  <div className="modal-complain">
    <div className="modal-complain__close" onClick={onClose}>
      X
    </div>
    <div className="modal-complain__content">
      Пожаловаться на хобби друга "{content}"
    </div>
  </div>
);

ModalComplain.propTypes = {
  content: PropTypes.string,
  onClose: PropTypes.func
};

export default ModalComplain;
