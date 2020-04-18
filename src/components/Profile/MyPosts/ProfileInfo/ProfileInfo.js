import style from "../../Profile.module.css";
import main_avatar from "../../../../images/joker.jpg";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
debugger
    return (
        <div className={style.description}>
            <div className={style.avatar}>
                <img src={profile.photos.large} alt="avatar"/>
            </div>
            <div className={style.info}>
                <h3>Artur Flack</h3>
                <div className={style.info_item}>Date of birth: 1 January</div>
                <div className={style.info_item}>City: New York</div>
                <div className={style.info_item}>Education: none</div>
                <div className={style.info_item}>Website: none</div>
            </div>
        </div>
    )
}

export default ProfileInfo;