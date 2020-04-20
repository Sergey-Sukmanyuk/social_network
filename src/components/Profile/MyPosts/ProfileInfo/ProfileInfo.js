import style from "../../Profile.module.css";
import main_avatar from "../../../../images/avaMale.png";
import git from "../../../../images/social/git.png";
import vk from "../../../../images/social/vk.png";
import fb from "../../../../images/social/fb.png";
import instagram from "../../../../images/social/inst.png";
import twitter from "../../../../images/social/twit.png";
import website from "../../../../images/social/web.png";
import youtube from "../../../../images/social/you.png";
import mainLink from "../../../../images/social/linked.png";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }


    return (
        <div className={style.description}>
            <div className={style.avatar}>
                <img src={profile.photos.large || main_avatar} alt="avatar"/>
            </div>
            <div className={style.info}>
                <h3>{profile.fullName}</h3>
                <div className={style.info_item}>Date of birth: 1 January</div>
                <div className={style.info_item}>City: New York</div>
                <div className={style.info_item}>Education: none</div>
                <div className={style.info_item}>Contacts:
                    <div className={style.social}>
                        <img className={style.socialImg} src={git} alt="git"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.github}>{profile.contacts.github}</a> </span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={vk} alt="vk"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.vk}> {profile.contacts.vk} </a> </span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={fb} alt="fb"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.facebook}>{profile.contacts.facebook}</a></span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={instagram} alt="instagram"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.instagram}>{profile.contacts.instagram}</a></span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={twitter} alt="twitter"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.twitter}> {profile.contacts.twitter} </a> </span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={website} alt="website"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.website}> {profile.contacts.website} </a> </span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={youtube} alt="youtube"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.youtube}> {profile.contacts.youtube} </a> </span>
                    </div>
                    <div className={style.social}>
                        <img className={style.socialImg} src={mainLink} alt="mainLink"/>  <span className={style.socialUrl}> :
                        <a href = {profile.contacts.mainLink} > {profile.contacts.mainLink} </a> </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;