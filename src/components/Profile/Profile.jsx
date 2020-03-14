import React from 'react';
import wallpaper from "../../images/wallpaper.png";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <section className={style.content}>
            <div className={style.wallpaper}>
                <img src={wallpaper} alt=""/>
            </div>

            <ProfileInfo/>
            <MyPosts posts = {props.state.posts}/>

        </section>
    )
}

export default Profile;