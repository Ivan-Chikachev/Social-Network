import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUserCount,
  toggleIsFetching,
  unfollow,
} from '../../redux/users-reducer';
import Loader from '../Loader';
import Users from './Users';
import * as axios from 'axios';
import React from 'react';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const usersContainer = connect(mapStateToProps, {
  toggleIsFetching,
  setTotalUserCount,
  setCurrentPage,
  setUsers,
  unfollow,
  follow,
})(UsersAPI);

export default usersContainer;
