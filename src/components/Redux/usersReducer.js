import {usersAPI} from "../API/Api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USERS = 'USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'SET-USERS-COUNT'
const SET_PRELOADER = 'SET-PRELOADER'
const SET_DISABLE = 'SET-DISABLE'


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: false,
    isDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        case SET_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_DISABLE:
            return {
                ...state,
                isDisabled: action.isDisabled
                    ? [...state.isDisabled, action.id]
                    : state.isDisabled.filter(id => id !== action.id)
            }


        default:
            return state;
    }
}

const follow = (userId) => ({type: FOLLOW, userId})
const unfollow = (userId) => ({type: UNFOLLOW, userId})
const setUsers = (users) => ({type: USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
const setUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount})
const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching})
const setDisableButton = (isDisabled, id) => ({type: SET_DISABLE, isDisabled, id})


export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setPreloader(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setPreloader(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersCount(data.totalCount))
        })
}

export const following = (userId) => (dispatch) => {
    dispatch(setDisableButton(true, userId))
    usersAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
            dispatch(setDisableButton(false, userId))
        }
    })
}

export const unfollowing = (userId) => (dispatch) => {
    dispatch(setDisableButton(true, userId))
    usersAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId))
            dispatch(setDisableButton(false, userId))
        }
    })
}


export default usersReducer;