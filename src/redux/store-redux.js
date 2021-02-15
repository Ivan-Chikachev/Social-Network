import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import massangerReducer from "./massanger-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducer = combineReducers({
    massangerPage: massangerReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;
