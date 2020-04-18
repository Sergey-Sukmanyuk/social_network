import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {

    return (

            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper_content">
                        <Route path = "/profile"> <ProfileContainer /> </Route>
                        <Route path = "/dialogs"> <DialogsContainer /> </Route>
                        <Route path = "/news" component={News}/>
                        <Route path = "/music" component={Music}/>
                        <Route path = "/users"> <UsersContainer /> </Route>
                        <Route path = "/settings" component={Settings}/>
                    </div>
                    <Footer/>
                </div>
            </div>
    );
}

export default App;
