import React from 'react';
import wallpaper from "../../images/wallpaper.png";
import style from './Profile.module.css'

import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({profile}) => {

    return (
        <section className={style.content}>
            <div className={style.wallpaper}>
                <img src={wallpaper} alt=""/>
            </div>

            <ProfileInfo profile = {profile}/>
            <MyPostsContainer />


        </section>
    )
}

export default Profile;