import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import Page from './Page';
import {setUsersProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class PageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId= 2;
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`) 
        .then((response) => {
          this.props.setUsersProfile(response.data);
        });
    }

  render() {
    return <Page {...this.props} profile={this.props.profile}/>;
  }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile});

const UrlDataConatiner = withRouter(PageContainer);

export default connect(mapStateToProps, { setUsersProfile })(UrlDataConatiner);
