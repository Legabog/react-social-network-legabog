import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const CHANGE_STATUS_HANDLER = "CHANGE_STATUS_HANDLER"

let initialState = {
  PostsData: [
    
  ],
  profile: null,
  profilePhoto: "https://avatars0.githubusercontent.com/u/44378669?s=460&u=079ef1f1a38cec38b2b6ba37b9f71cfccc88ce1f&v=4",
  profileStatus: "Change status",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        message: action.addMyPostForm,
        likes: 0,
      };
      let stateCopy = {
        ...state,
        PostsData: [...state.PostsData, newPost],
      };
      return stateCopy;
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
        profileStatus: action.status ? action.status : "Change status",
      };
    }

    case CHANGE_STATUS_HANDLER: {
      return {
        ...state,
        profileStatus: action.status
      }
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (addMyPostForm) => {
  return {
    type: ADD_POST,
    addMyPostForm
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
    status,
  };
};

export const changeStatusHandler = (status) => {
  return {
    type: CHANGE_STATUS_HANDLER,
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
    userAPI.getProfileStatus(userId).then((response) => {
      dispatch(setProfileStatus(response));
    });
};


export const updateProfileStatus = (status) => {
  return (dispatch) => {
    userAPI.updateProfileStatus(status).then((response) => {
      if (response.resulCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export default profileReducer;
