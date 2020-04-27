import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {


    const postElements = props.posts.map(data => <Post key = {data.id} post={data.post} likesCount={data.likesCount}/>)


    let addNewPost = (value) => {
         props.addPost(value.newPostText)
    }


    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <PostReduxForm onSubmit = {addNewPost}/>
            {postElements}
        </div>
    );
}

const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your post'} name={'newPostText'} component={'textarea'}/>
            </div>
            <div className={style.btn}>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'addPostForm'
})(PostForm)

export default MyPosts;