import React, {Component} from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuth} from "../Redux/authReducer";

 class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setUserAuth(id, email, login)
            }

        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer)