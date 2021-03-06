import React from "react";
import UserPhoto from "../../assets/images/user.png";
import Pagination from "@material-ui/lab/Pagination";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.rootdiv}>
      <div className={classes.userslider}>
        <div className={classes.root}>
          <Pagination
            color="primary"
            count={pagesCount}
            onChange={(e, page) => {
              props.onPageChanged(page);
            }}
          />
        </div>
      </div>
      <div className={classes.cardsdiv}>
        {props.users.map((e) => (
          <div key={e.id} className={classes.usercard}>
            <span>
              <div className={classes.shortinfo}>
                <NavLink to={"/profile/" + e.id}>
                  <img
                    src={e.photos.small != null ? e.photos.small : UserPhoto}
                    className={classes.userphoto}
                    alt="description"
                  />
                </NavLink>
                <span>
                  <p>
                    <strong>{e.name}</strong>
                  </p>
                  <NavLink to={"/profile/" + e.id}>
                    <p>
                      <strong>Link to profile</strong>
                    </p>
                  </NavLink>
                  <p>{e.status || "Нет статуса"}</p>
                </span>
              </div>
              <div>
                {e.followed ? (
                  <button 
                    disabled = {props.followingInProgress.some(id => id === e.id)}
                    className={classes.unfollowbutton}
                    onClick={() => {
                      props.toggleFollowingProgress(true, e.id);
                      userAPI.unfollow(e.id)
                        .then((response) => {
                          if (response.resultCode === 0) {
                            props.unfollow(e.id);
                          }
                        });
                        props.toggleFollowingProgress(false, e.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled = {props.followingInProgress.some(id => id === e.id)}
                    className={classes.followbutton}
                    onClick={() => {
                      props.toggleFollowingProgress(true, e.id);
                      userAPI.follow(e.id)
                        .then((response) => {
                          if (response.resultCode === 0) {
                            props.follow(e.id);
                          }
                        });
                        props.toggleFollowingProgress(false, e.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Users;
