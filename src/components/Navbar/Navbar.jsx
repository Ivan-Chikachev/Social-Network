import React from "react";
import { NavLink } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="content__nav">
    <ul>
      <li>
        <NavLink to="/profile">Моя страница</NavLink>
      </li>
      <li>
        <NavLink to="/massanger">Сообщения</NavLink>
      </li>
      <li>
        <NavLink to="/users">Люди</NavLink>
      </li>
      <li>
        <NavLink to="/news">Новости</NavLink>
      </li>
      <li>
      <NavLink to="/music">Музыка</NavLink>
      </li>
      <li>
        <NavLink to="/settings">Настройки</NavLink>
      </li>
    </ul>
  </nav>
  )
}
export default navbar;
