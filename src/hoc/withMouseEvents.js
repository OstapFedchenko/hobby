import React, { Component } from "react";

import { HOBBIES_LIST_ITEM_CLASS } from "../constants";

const withMouseEvents = WrappedComponent =>
  class MouseEventsHoc extends Component {
    element = null;
    state = {
      isHovered: false
    };

    onMouseOut = event => {
      if (!this.element) return;

      let relatedTarget = event.relatedTarget;

      if (relatedTarget) {
        while (relatedTarget) {
          if (relatedTarget === this.element) {
            return;
          }

          relatedTarget = relatedTarget.parentNode;
        }
      }

      this.element = null;
      this.setState({ isHovered: false });
    };

    onMouseOver = event => {
      if (this.element) {
        return;
      }

      let target = event.target;

      while (target !== this.element) {
        if (target.className.includes(HOBBIES_LIST_ITEM_CLASS)) {
          break;
        }

        target = target.parentNode;
      }

      this.element = target;
      this.setState({
        isHovered: true
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onMouseOut={this.onMouseOut}
          onMouseOver={this.onMouseOver}
        />
      );
    }
  };

export default withMouseEvents;
