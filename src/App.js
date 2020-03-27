import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";


function App(props) {

    return (

            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="wrapper_content">
                        <Route path = "/profile"> <Profile store = {props.store} /> </Route>
                        <Route path = "/dialogs"> <Dialogs store = {props.store}/> </Route>
                        <Route path = "/news" component={News}/>
                        <Route path = "/music" component={Music}/>
                        <Route path = "/settings" component={Settings}/>
                    </div>
                    <Footer/>
                </div>
            </div>
    );
}

export default App;
