import React from 'react'
import avatar from '../../images/avaMale.png'
import style from './Users.module.css'
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.wrapper}>

            {props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={style.avatar} src={user.photos.small != null ? user.photos.small : avatar}
                                     alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.isDisabled.some(id => id === user.id)}
                                          onClick={() => props.unfollowing(user.id)}> Unfollow </button>

                                : <button disabled={props.isDisabled.some(id => id === user.id)}
                                          onClick={() => props.following(user.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            )}
            <div className={style.pagination}>
                {pages.map(page => <span onClick={() => {
                    props.onPageChange(page)
                }} className={props.currentPage === page && style.selectedPage}> {page} </span>)}
            </div>
        </div>
    )
}

export default Users
