import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../Redux/usersReducer";


let mapStateToProps = (state) => ({
    users: state.usersPage.users
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }

})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer