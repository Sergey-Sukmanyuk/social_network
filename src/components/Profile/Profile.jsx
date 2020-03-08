import React from 'react';
import wallpaper from "../../images/wallpaper.png";
import main_avatar from "../../images/joker.jpg";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return(
        <section className= {style.content}>
            <div className={style.wallpaper}>
                <img src={wallpaper} alt=""/>
            </div>

            <div className={style.description}>
                <div className={style.avatar}>
                    <img src={main_avatar} alt="avatar"/>
                </div>
                <div className={style.info}>
                    <h3>Artur Flack</h3>
                    <div className={style.info_item}>Date of birth: 1 January</div>
                    <div className={style.info_item}>City: New York</div>
                    <div className={style.info_item}>Education: none</div>
                    <div className={style.info_item}>Website: none</div>
                </div>
            </div>
        <MyPosts/>
        
        </section>
    )
}

export default Profile;