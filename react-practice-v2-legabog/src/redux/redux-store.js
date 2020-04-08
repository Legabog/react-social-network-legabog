import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from './users-reducer'

let reducers = combineReducers({
    profileReducer, 
    dialogsReducer, 
    navbarReducer,
    usersReducer
});

let store = createStore(reducers);


export default store;