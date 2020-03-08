import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <input type="text"/>
                <button>Add Post</button>
            </div>
            <Post message = "Hello I'm glad to see you here!!" likeValue = {10}/>
            <Post message = "Hey everyone it's my first post!!!" likeValue = {7}/>

        </div>
    );
}
export default MyPosts;