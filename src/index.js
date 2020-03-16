import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./components/Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}
                 addPost = {store.addPost.bind(store)}
                 updatePost ={store.updatePost.bind(store)}
                 addMessage = {store.addMessage.bind(store)}
                 updateMessage = {store.updateMessage.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)

