import React, {Component} from 'react'
import avatar from '../../images/avaMale.png'
import style from './Users.module.css'
import * as axios from 'axios'

export default class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={style.wrapper}>

                {this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>

                                <img className={style.avatar} src={user.photos.small != null ? user.photos.small : avatar}
                                     alt="avatar"/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => this.props.unfollow(user.id)}> Unfollow </button>
                                    : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
                        this.onPageChange(page)
                    }} className={this.props.currentPage === page && style.selectedPage}> {page} </span>)}

                </div>

            </div>
        )
    }
}
