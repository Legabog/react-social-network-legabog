import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = props => {
  let DialogsElements = props.DialogsData.map(ell => (
    <DialogItem key={ell.id} name={ell.name} id={ell.id} imgpath={ell.avatarpath} />
  ));

  let MessagesElements = props.MessagesData.map(ell => (
    <Message key={ell.id} message={ell.message} id={ell.id} />
  ));

  let addMessage = () => {
    props.addMessage();
    props.changeText("");
  };

  let changeText = e => {
    props.changeText(e.target.value);
  };

  if (!props.isAuth) return <Redirect to={"/login"}/> ;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElements}</div>
      <div className={s.messages}>
        <div>{MessagesElements}</div>

        <div>
          <div>
            <textarea
              onChange={changeText}
              value={props.defaultMessage}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
