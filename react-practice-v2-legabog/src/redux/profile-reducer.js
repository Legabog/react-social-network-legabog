import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

let initialState = {
  PostsData: [
    { id: 1, message: "Hi, how are you?", likes: 20 },
    { id: 2, message: "It's my first post", likes: 30 },
    { id: 3, message: "q", likes: 2 },
    { id: 4, message: "w", likes: 12 },
    { id: 5, message: "e", likes: 23 },
  ],
  newPostText: "legabozhestvo",
  profile: null,
  profileStatus: "Change status"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likes: 0,
      };
      let stateCopy = {
        ...state,
        PostsData: [...state.PostsData, newPost],
      };
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.status ? action.status : "Change status"
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status
  }
}

export const getProfile = (userId) => {
  return (dispatch) =>
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
};

export const getProfileStatus = (userId) => {
  return (dispatch) => 
    userAPI.getProfileStatus(userId).then(response => {
      dispatch(setProfileStatus(response))
    })
}


export default profileReducer;
