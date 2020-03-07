import React from 'react';
import logo from './images/logo_.png'
import wallpaper from './images/wallpaper.png'
import main_avatar from './images/joker.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
     <div className="wrapper">

       <header className="header">
         <div className="logo__wrapper">
           <a href="#"><img className="logo" src={logo} alt="Logo"/></a>
         </div>
       </header>

       <section className="sidebar">
         <ul>
           <li><a href="#">Profile</a></li>
           <li><a href="#">Messages</a></li>
           <li><a href="#">News</a></li>
           <li><a href="#">Music</a></li>
           <li><a href="#">Settings</a></li>
         </ul>
       </section>

       <section className="content">
         <div className="wallpaper">
           <img src={wallpaper} alt=""/>
         </div>

         <div className="description">
           <div className="avatar">
             <img src={main_avatar} alt="avatar"/>
           </div>
           <div className="info">
             <h3>Artur Flack</h3>
             <div className="info_item">Date of birth: 1 January</div>
             <div className="info_item">City: New York</div>
             <div className="info_item">Education: none</div>
             <div className="info_item">Website: none </div>
           </div>
         </div>

         <div className="posts">
           <h2>My Posts</h2>
           <div>
             <input type="text"/>
             <button>Add Post</button>
           </div>

           <div className="post__wrapper">
             <div className="post">First post</div>
             <div className="post">Second post</div>
           </div>

         </div>

       </section>

       <footer className="footer">

       </footer>

     </div>
    </div>
  );
}

export default App;
