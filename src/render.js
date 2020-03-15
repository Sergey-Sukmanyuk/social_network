import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateMessage, updatePost} from "./components/Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state} addPost = {addPost} updatePost ={updatePost} addMessage = {addMessage} updateMessage = {updateMessage}/>
        </BrowserRouter>, document.getElementById('root'));

}
