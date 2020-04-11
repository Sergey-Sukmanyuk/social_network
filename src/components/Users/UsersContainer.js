import React, {Component} from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../Redux/usersReducer";
import * as axios from "axios";

 class UsersContainer extends Component {

     componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)
             this.props.setUsersCount(response.data.totalCount)
         })
     }

     onPageChange = (currentPage) => {
         this.props.setCurrentPage(currentPage)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setUsers(response.data.items)

         })
     }

     render() {
         return <Users totalUsersCount = {this.props.totalUsersCount}
                       pageSize = {this.props.pageSize}
                       users = {this.props.users}
                       follow = {this.props.follow}
                       unfollow = {this.props.unfollow}
                       currentPage = {this.props.currentPage}
                       onPageChange = {this.onPageChange}/>
     }
 }

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

