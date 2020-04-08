const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  PostsData: [
    { id: 1, message: "Hi, how are you?", likes: 20 },
    { id: 2, message: "It's my first post", likes: 30 },
    { id: 3, message: "q", likes: 2 },
    { id: 4, message: "w", likes: 12 },
    { id: 5, message: "e", likes: 23 }
  ],
  newPostText: "legabozhestvo"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likes: 0
      };
      let stateCopy = {
        ...state,
        PostsData: [...state.PostsData, newPost],
      }
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updatePostActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export default profileReducer;
