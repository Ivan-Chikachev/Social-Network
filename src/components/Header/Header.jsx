import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    const loginName =
        <div><span>{props.login}</span>
            <span
                onClick={props.logout}
                className={'header__logout'}>Выйти
            </span>
        </div>;

  return (
    <header className='header'>
      <div className='container'>
        <div className="header-block">
          <div className='header__logo'>
            <img
              src='https://i.pinimg.com/originals/77/5d/12/775d12ffeecadbfbbf2d4150c57b8342.png'
              alt=''
            />
          </div>
          <div className='header__login'>
            {props.isAuth ? loginName : <NavLink to='/login'>Войти</NavLink>}
            
          </div>
       </div>
      </div>
    </header>
  );
};

export default Header;
