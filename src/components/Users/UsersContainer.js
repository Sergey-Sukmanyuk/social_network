import React, {Component} from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrentPage, setPreloader, setUsers, setUsersCount, unfollow} from "../Redux/usersReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

 class UsersContainer extends Component {

     componentDidMount() {
         this.props.setPreloader(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setPreloader(false)
             this.props.setUsers(response.data.items)
             this.props.setUsersCount(response.data.totalCount)
         })
     }

     onPageChange = (currentPage) => {
         this.props.setCurrentPage(currentPage)
         this.props.setPreloader(true)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
             this.props.setPreloader(false)
             this.props.setUsers(response.data.items)

         })
     }

     render() {
         return <>
             {this.props.isFetching ? <Preloader/> : null}
         <Users totalUsersCount = {this.props.totalUsersCount}
                       pageSize = {this.props.pageSize}
                       users = {this.props.users}
                       follow = {this.props.follow}
                       unfollow = {this.props.unfollow}
                       currentPage = {this.props.currentPage}
                       onPageChange = {this.onPageChange}
                       setPreloader = {this.props.setPreloader}/>
         </>
     }
 }

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
})


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setUsersCount, setPreloader})(UsersContainer)

