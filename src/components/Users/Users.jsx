import React from 'react'
import avatar from'../../images/avaMale.png'
import style from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0){
        props.setUsers(
            [{id: '1', followed: true, fullName: 'Dima', status: 'Life is good', location:{ country: 'Belarus', city: 'Minsk'}},
                {id: '2', followed: false, fullName: 'Victor', status: 'Life is good', location:{ country: 'Russia', city: 'Moscow'}},
                {id: '3', followed: false, fullName: 'Sergey', status: 'Life is good', location:{ country: 'Ukraine', city: 'Kiev'}}]
        )
    }


    return (
        <div className={style.wrapper}>
            {props.users.map(user => <div key = {user.id}>
                <div>
                    <div><img className={style.avatar} src={avatar} alt="avatar"/></div>
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