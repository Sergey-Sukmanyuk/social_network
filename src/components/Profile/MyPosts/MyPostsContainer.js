import React from 'react'
import MyPosts from "./MyPosts";
import {addPost} from "../../Redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

const MyPostsContainer = connect(mapStateToProps,{addPost} )(MyPosts)
export default MyPostsContainer;