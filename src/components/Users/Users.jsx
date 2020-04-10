import React from 'react'
import avatar from'../../images/avaMale.png'
import style from './Users.module.css'
import * as axios from 'axios'

const Users = (props) => {
    debugger
    if (props.users.length === 0){
axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
    props.setUsers(response.data.items)
})
    }


    return (
        <div className={style.wrapper}>
            {props.users.map(user => <div key = {user.id}>
                <div>
                    <div>

                       <img className={style.avatar} src={user.photos.small != null ? user.photos.small : avatar} alt="avatar"/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id) }> Unfollow </button>
                            : <button onClick={() => props.follow(user.id) }>Follow</button>}
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
        </div>
    )
}

export default Users;