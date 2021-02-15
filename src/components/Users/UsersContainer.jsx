import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUsers
} from '../../redux/users-reducer';
import Loader from '../Loader';
import Users from './Users';
import React from 'react';
import {getUsersSelectors} from "../../redux/Selectors/UsersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
      this.props.setCurrentPage(pageNumber)
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowing={this.props.toggleFollowingProgress}
                />
            </>
        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//     };
// };
const mapStateToProps = (state) => {
    return {
        users: getUsersSelectors(state),
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    toggleFollowingProgress,
    setCurrentPage,
    unfollow,
    follow,
  getUsers
})(UsersContainer);


