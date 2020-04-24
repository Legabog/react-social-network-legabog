import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
  render() {
    return (
      <Settings {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.settingsReducer.countries
  };
};

export default connect(mapStateToProps, {})(SettingsContainer);
