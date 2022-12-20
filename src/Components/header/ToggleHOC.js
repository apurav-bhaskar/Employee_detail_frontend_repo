import React from "react";

const withToggle = (PassedComponent) =>
  class WithToggle extends React.Component {
    state = {
      toggleStatus: false,
    };
    constructor() {
      super();
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      if (localStorage.tokenDetail) {
        this.setState({
          toggleStatus: true,
        });
      }
    }
    render() {
      return (
        <>
          {this.toggle}
          <PassedComponent
            {...this.props}
            toggleStatus={this.state.toggleStatus}
          />
        </>
      );
    }
  };

export default withToggle;
