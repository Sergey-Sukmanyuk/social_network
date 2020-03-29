import React from 'react'
import MyPosts from "../MyPosts";
import {addPostAC, updatePostAC} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = (dispatch) => ({
    addPost:() => dispatch(addPostAC()),
    updatePost: (text) => dispatch(updatePostAC(text))
})


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;