import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setStatus} from "../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withRedirect} from "../hoc/authRedirect";
import {compose} from "redux";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile profile = {this.props.profile}
                         status = {this.props.status} setStatus = {this.props.setStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// let withAuthRedirect = withRedirect(ProfileContainer)
// let GetProfileInfo = withRouter(withAuthRedirect)
// export default connect(mapStateToProps, {getProfile})(GetProfileInfo)

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, setStatus}),
    withRouter,
    withRedirect
)(ProfileContainer)