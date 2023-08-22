import React from 'react';
import {UsersContainerPagePropsType} from "./UsersContainer";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";


type UserPagePropsType = UsersContainerPagePropsType & {
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UserPagePropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    if (p <= 20 || p > pages.length - 20) {
                        return (
                            <span
                                key={p}
                                className={props.currentPage === p ? styles.selectedPage : styles.p}
                                onClick={() => {
                                    props.onPageChanged(p);
                                }}
                            >
                    {p}
                </span>
                        );
                    } else if (p === 21 || p === pages.length - 20 + 1) {
                        // Add an ellipsis (...) for pages not displayed in between
                        return <span key={p}> * * * </span>;
                    }
                    return null;
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt={'user avatar'}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2960ec12-c225-4335-9625-b5eb957babfa'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2960ec12-c225-4335-9625-b5eb957babfa'
                                    }
                                })
                                .then(response => {
                                   if (response.data.resultCode === 0) {
                                       props.follow(u.id)
                                   }
                                })}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;