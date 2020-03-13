import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


let postData = [
    {id: '1', post: 'Hello I\'m glad to see you here!!', likesCount: '10'},
    {id: '2', post: 'Hey everyone it\'s my first post!!!', likesCount: '7'}
];

const userData = [
    {id: '1', name: 'Sergey'},
    {id: '2', name: 'Vitalik'},
    {id: '3', name: 'Dima'},
    {id: '4', name: 'Irina'}
];

const messageData = [
    {id: '1', message: 'Hello, how are you?'},
    {id: '1', message: 'I\'m fine. What about you?'},
    {id: '1', message: 'I\'m fine too)'}
];


ReactDOM.render(
    <BrowserRouter>
        <App posts = {postData} users = {userData} messages = {messageData}/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
