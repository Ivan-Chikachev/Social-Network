import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../acces/img/avatar.png';

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className='content__page page'>
      {props.users.map((u) => (
        <div className='page__users users'>
          <div className='users__about-user about-user'>
            <div className='about-user__img'>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=''
                />
              </NavLink>
            </div>
            <div className='about-user__name'>
              <NavLink to={'/profile/' + u.id}>{u.name}</NavLink>
              <p>{u.location}</p>
            </div>
            <div className='about-user__status'>
              <span>{u.status}</span>
            </div>
          </div>
          <div className='users__btn-follow'>
            {u.folloewd 
            ? (<button className='btn' onClick={() => {props.unfollow(u.id)}}>Отписаться</button>)
            : (<button className='btn' onClick={() => {props.follow(u.id)}}>Подписаться</button>)
            }
          </div>
        </div>
      ))}
      {pages.map((p) => {
        return (
          <span className={props.currentPage === p && 'selectedPage'}>
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              className='page-selector'>
              {p}
            </span>
          </span>
        );
      })}
    </div>
  );
};
export default Users;
