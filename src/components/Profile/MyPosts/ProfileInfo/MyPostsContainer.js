import React from 'react'
import MyPosts from "../MyPosts";
import {addPostAC, updatePostAC} from "../../../Redux/profileReducer";


const MyPostsContainer = (props) => {


    let addNewPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostAC(text))
    }


    return (
        <MyPosts addPost = {addNewPost}
                 updatePost = {onPostChange}
                 posts = {props.store.getState().profilePage.posts}
                 newPostText = {props.store.getState().profilePage.newPostText} />
    );
}
export default MyPostsContainer;