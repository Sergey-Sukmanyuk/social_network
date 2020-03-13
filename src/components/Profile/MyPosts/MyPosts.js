import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    const postElements = props.posts.map(data => <Post post={data.post} likesCount={data.likesCount}/>)

    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <input type="text"/>
                </div>
                <div className={style.btn}>
                    <button>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
}
export default MyPosts;