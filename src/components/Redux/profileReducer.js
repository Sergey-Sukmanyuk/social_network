import {profileAPI} from "../API/Api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    posts: [
        {id: '1', post: 'Hello I\'m glad to see you here!!', likesCount: '10'},
        {id: '2', post: 'Hey everyone it\'s my first post!!!', likesCount: '7'}
    ],
    newPostText: '',
    profile: null,
    status: ''

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: '3',
                post: state.newPostText,
                likesCount: '0'
            }
            return {
                ...state,
                posts: [post, ...state.posts],
                newPostText: ''
            }

        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.updateText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updatePost = (text) => ({type: UPDATE_POST, updateText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setDataStatus = (status) => ({type: SET_USER_STATUS, status})



export const getProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setDataStatus(response.data))
    })
}
export const setStatus = (status) => (dispatch) => {
    profileAPI.setUserStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setDataStatus(status))
        }
    })

}

export default profileReducer;