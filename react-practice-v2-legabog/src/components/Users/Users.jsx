import React from "react";
import UserPhoto from "../../assets/images/user.png";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { updatePostActionCreator } from "../../redux/profile-reducer";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.root}>
        <Pagination
          color="primary"
          count={pagesCount}
          onChange={(e, page) => {
            props.onPageChanged(page);
          }}
        />
      </div>

      {props.users.map((e) => (
        <div key={e.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + e.id}>
              <img
                src={e.photos.small != null ? e.photos.small : UserPhoto}
                className={classes.userphoto}
              />
              </NavLink>
            </div>
            <div>
              {e.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(e.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(e.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{e.name}</div>
              <div>{e.status}</div>
            </span>
            <span>
              <div>{"e.location.city"}</div>
              <div>{"e.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
