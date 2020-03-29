import React from 'react';
import wallpaper from "../../images/wallpaper.png";
import style from './Profile.module.css'

import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";


const Profile = (props) => {

    return (
        <section className={style.content}>
            <div className={style.wallpaper}>
                <img src={wallpaper} alt=""/>
            </div>

            <ProfileInfo/>
            <MyPostsContainer />


        </section>
    )
}

export default Profile;