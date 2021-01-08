import { combineReducers, createStore } from "redux";
import massangerReducer from "./massanger-reducer";
import profileReducer from "./profile-reducer";

let reducer = combineReducers({
    massangerPage: massangerReducer,
    profilePage: profileReducer
});

let store = createStore(reducer);

export default store;
