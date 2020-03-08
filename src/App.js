import React from 'react';

import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div className="wrapper">

                <Header/>
                <Navbar/>
                <Profile/>
                <Footer/>


            </div>
        </div>
    );
}

export default App;
