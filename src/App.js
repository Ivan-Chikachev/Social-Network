import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Massanger from './components/Massanger/Massanger';
import UsersContainer from './components/Users/UsersContainer';
import PageContainer from './components/Page/PageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <div className="mainblock">
        <div className="container">
          <div className="content">
            <Navbar />
            <Route path="/profile/:userId?" render={() => <PageContainer />}/>
            <Route path="/massanger" render={() => <Massanger />}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/login" render={() => <Login />}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
