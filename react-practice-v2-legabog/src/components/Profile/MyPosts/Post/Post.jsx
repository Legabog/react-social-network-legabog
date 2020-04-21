import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://s01.geekpic.net/di-JX2ZZP.jpeg" alt="description" />
      {props.message}
      <div>
        <span>like count: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
