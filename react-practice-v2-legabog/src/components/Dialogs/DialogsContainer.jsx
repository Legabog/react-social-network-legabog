import {
  updatePostDialogsActionCreator,
  addPostDialogsActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = state => {
  return {
    DialogsData: state.dialogsReducer.DialogsData,
    MessagesData: state.dialogsReducer.MessagesData,
    defaultMessage: state.dialogsReducer.defaultMessage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
      dispatch(addPostDialogsActionCreator());
      dispatch(updatePostDialogsActionCreator(""));
    },
    changeText: text => {
      dispatch(updatePostDialogsActionCreator(text));
    }
  };
};


const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));

export default DialogsContainer;
