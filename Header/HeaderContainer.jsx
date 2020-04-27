import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, authMe } from "../../redux/auth-reducer";
import { toggleNotify } from "../../redux/header-reducer"

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
  email: state.authReducer.email,
});

export default connect(mapStateToProps, { 
  setAuthUserData,
  toggleNotify,
  authMe })(HeaderContainer);
