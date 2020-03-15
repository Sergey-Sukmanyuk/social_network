import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    const postElements = props.profilePage.posts.map(data => <Post key = {data.id} post={data.post} likesCount={data.likesCount}/>)
    let getPost = React.createRef()

    let addNewPost = () => {
        props.addPost()
    }

    let onPostChange = () =>{
        let text = getPost.current.value
        props.updatePost(text)
    }


    return (
        <div className={style.posts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={getPost} value={props.profilePage.newPostText}/>
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