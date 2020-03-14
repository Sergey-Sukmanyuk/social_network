import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    const postElements = props.posts.map(data => <Post key = {data.id} post={data.post} likesCount={data.likesCount}/>)
    let inputPost = React.createRef()

    let addPost = () => {
        let text = inputPost.current.value
        props.addPost(text)
        inputPost.current.value = ''
    }
    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <input ref={inputPost} type="text"/>
                </div>
                <div className={style.btn}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
}
export default MyPosts;