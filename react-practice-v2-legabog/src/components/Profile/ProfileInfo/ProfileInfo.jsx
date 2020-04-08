import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <div>
      <div className={s.fontImage}>
        <img src="https://s01.yapfiles.ru/files/1990311/polenebogorizontpeyzazh.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + discription</div>
    </div>
  );
};

export default ProfileInfo;
