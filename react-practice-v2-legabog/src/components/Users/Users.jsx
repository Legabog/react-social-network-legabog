import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import UserPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setusers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map(e => (
          <div key={e.id}>
            <span>
              <div>
                <img
                  src={e.photos.small != null ? e.photos.small : UserPhoto}
                  className={classes.userphoto}
                />
              </div>
              <div>
                {e.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(e.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(e.id);
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
  }
}

export default Users;
