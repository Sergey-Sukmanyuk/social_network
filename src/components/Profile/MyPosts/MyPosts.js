import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, updatePostAC} from "../../Redux/profileReducer";


const MyPosts = (props) => {


    const postElements = props.profilePage.posts.map(data => <Post key = {data.id} post={data.post} likesCount={data.likesCount}/>)


    let addNewPost = () => {
        //props.addPost()
        props.dispatch(addPostAC())
    }

    let onPostChange = (event) => {
        let text = event.target.value
        // props.updatePost(text)
        props.dispatch(updatePostAC(text))
    }


    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}  placeholder="Enter your post" value={props.profilePage.newPostText}/>
                </div>
                <div className={style.btn}>
                    <button onClick={addNewPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
}
export default MyPosts;