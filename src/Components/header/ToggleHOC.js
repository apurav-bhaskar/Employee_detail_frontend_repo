import React from "react";

const withToggle = (PassedComponent) =>

  class WithToggle extends React.Component {
    state = {
      toggleStatus: false,
    };
    toggle(){
        this.setState({
            toggleStatus:!this.state.toggleStatus
        })
    }
    
    render() {
        if (this.state.toggleStatus == false && localStorage.tokenDetail) {
                this.setState({
                    toggleStatus: true,
                  });
                }
      return (
        <>
          
          <PassedComponent
            {...this.props}
            toggle={this.toggle}
            toggleStatus={this.state.toggleStatus}
          />
        </>
      );
    }
  };

export default withToggle;
