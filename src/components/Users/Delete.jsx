import * as axios from "axios";
import React from "react";
import userPhoto from '../../acces/img/avatar.png';
const users = (props) => {

axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
props.setUsers(response.data.items)
})
  return (
    <div className='content__page page'>
        
      {props.users.map((u) => (
        
          <div className="page__users users">
            <div className="users__about-user about-user">
              <div className="about-user__img">
                <a href="">
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                </a>
              </div>
              <div className="about-user__name">
                <a href="">{u.name}</a>
                <p>{u.location}</p>
              </div>

              <div className="about-user__status">
                <span>{u.status}</span>
              </div>
            </div>
            <div className="users__btn-follow">
                {u.folloewd 
                ? <button className="btn" onClick={ () => {props.unfollow(u.id)}}>Подписаться</button> 
                :<button className="btn"  onClick={ () => {props.follow(u.id)}}>Отписаться</button>}
              
            </div>
          </div>
        
      ))}
    </div>
  );
};
export default users;
