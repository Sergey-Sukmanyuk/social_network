import React, {Component} from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {
    following, getUsers,
    setCurrentPage,
    unfollowing
} from "../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   following={this.props.following}
                   unfollowing={this.props.unfollowing}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   isDisabled={this.props.isDisabled}/>

        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    isDisabled: state.usersPage.isDisabled
})


export default connect(mapStateToProps, {following, unfollowing, setCurrentPage, getUsers})(UsersContainer)

