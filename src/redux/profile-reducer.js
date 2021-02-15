import {profileAPI} from "../api/api";

let initialState = {
    posts: [
        {
            id: 1,
            Name: 'Cat',
            text: 'Я уронил елку)',
        },
    ],
    profile: null,
    status: '',
};
const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                Name: 'Kitty Kat',
                text: action.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};


export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    })
};
export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resulCode === 0) {
            dispatch(setStatus(status));
        }

    })
};

export const getProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUsersProfile(response.data));
        });

    }
}

export default profileReducer;
