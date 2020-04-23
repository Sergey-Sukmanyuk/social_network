import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        debugger
        this.props.getProfile(userId)

    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let GetProfileInfo = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getProfile})(GetProfileInfo)