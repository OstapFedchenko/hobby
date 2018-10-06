import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  static propTypes = {
    submit: PropTypes.func
  };

  state = {
    value: ""
  };

  onChange = event => {
    if (event.target.value) {
      this.setState({ value: event.target.value });
    }
  };

  onKeyPress = event => {
    if (event.key === "Enter" && this.state.value.trim()) {
      this.props.submit(this.state.value);
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <input
        type="text"
        className="hobbies-list__add__input-text"
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        value={this.state.value}
        placeholder="Введите текст"
      />
    );
  }
}

export default Input;
