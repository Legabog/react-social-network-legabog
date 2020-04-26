import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Login from "./components/Login/Login";


const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route path="/news" component={() => <NewsContainer/>} />
          <Route path="/music" component={Music} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={() => <SettingsContainer/>} />
        </div>
      </div>
    </BrowserRouter>
  );
  
};



export default App;

