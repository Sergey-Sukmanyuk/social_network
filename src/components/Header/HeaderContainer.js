import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../Redux/authReducer";


class HeaderContainer extends Component {
    componentDidMount() {
       this.props.setAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuth})(HeaderContainer)