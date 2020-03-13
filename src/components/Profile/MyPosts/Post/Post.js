import React from 'react'
import style from './Post.module.css'
import avaMale from'../../../../images/avaMale.png'
import like from'../../../../images/like_.png'

const Post = (props) => {
    return(
            <div className={style.container}>
                <div className={style.post__wrapper}>
                    <div className = {style.avatar}>
                        <img src={avaMale} alt="avatar"/>
                    </div>
                    <div className={style.post}>
                        {props.post}
                    </div>
                </div>

                <div className={style.likeCounter}>
                    <img src={like} alt="like"/>
                    <div className={style.counter}>{props.likesCount}</div>
                </div>
                <hr/>

            </div>
    );
}
export default Post;