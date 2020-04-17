const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USERS = 'USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_COUNT = 'SET-USERS-COUNT'
const SET_PRELOADER = 'SET-PRELOADER'


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: false
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


        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount})
export const setPreloader = (isFetching) => ({type: SET_PRELOADER, isFetching})


export default usersReducer;