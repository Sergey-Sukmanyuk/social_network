const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USERS  = 'USERS'

let initialState = {
        users: [
            {id: '1', followed: true, fullName: 'Dima', status: 'Life is good', location:{ country: 'Belarus', city: 'Minsk'}},
            {id: '2', followed: false, fullName: 'Victor', status: 'Life is good', location:{ country: 'Russia', city: 'Moscow'}},
            {id: '3', followed: false, fullName: 'Sergey', status: 'Life is good', location:{ country: 'Ukraine', city: 'Kiev'}},

        ],
        newPostText: ''

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
                    return user})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user})
            }
        case USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: USERS, users})

export default usersReducer;