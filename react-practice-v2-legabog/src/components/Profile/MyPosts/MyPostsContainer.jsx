import {
  updatePostActionCreator,
  addPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    PostsData: state.profileReducer.PostsData,
    newPostText: state.profileReducer.newPostText
  }
}

let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updatePostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
