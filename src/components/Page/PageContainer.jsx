import {connect} from 'react-redux';
import React from 'react';
import Page from './Page';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/hoc";
import {compose} from "redux";


class PageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 14164;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Page {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(PageContainer)

