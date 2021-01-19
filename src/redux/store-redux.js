import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import massangerReducer from "./massanger-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducer = combineReducers({
    massangerPage: massangerReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducer);

window.store = store;

export default store;
