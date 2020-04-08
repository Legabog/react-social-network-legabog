import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setusers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
