import React from 'react'
import avatar from'../../images/avaMale.png'
import style from './Users.module.css'
const Users = (props) => {
    return (
        <div className={style.wrapper}>
            {props.users.map(user => <div key = {user.id}>
                <div>
                    <div><img src={avatar} alt="avatar"/></div>
                    <div>
                        {user.followed
                            ? <button onClick={() => props.unfollow(user.id) }> Unfollow </button>
                            : <button onClick={() => props.follow(user.id) }>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </div>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>

                </div>
            )}
        </div>
    )
}

export default Users;