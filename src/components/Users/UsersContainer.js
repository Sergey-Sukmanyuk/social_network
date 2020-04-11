import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../Redux/usersReducer";


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
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
    },
    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setUsersCount: (totalUsersCount) => {
        dispatch(setUsersCountAC(totalUsersCount))
    }


})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer