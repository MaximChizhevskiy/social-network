import React from 'react';
import styles from './Users.module.css'
import {UsersPagePropsType} from "./UsersContainer";

const Users = (props: UsersPagePropsType) => {
    if (props.users.length === 0) {
        props.setUser(
            [{
                id: 1,
                photoUrl: 'https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=740',
                followed: true,
                fullName: "Maxim",
                status: 'Hello!',
                location: {city: 'Almaty', country: 'Kazakhstan'}
            },
                {
                    id: 2,
                    photoUrl: 'https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg?w=740',
                    followed: true,
                    fullName: "Xeniya",
                    status: 'Good afternoon!',
                    location: {
                        city: 'Almaty',
                        country: 'Kazakhstan'
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg?w=740',
                    followed: true,
                    fullName: "Alena",
                    status: 'Hi!',
                    location: {
                        city: 'Almaty',
                        country: 'Kazakhstan'
                    }
                }
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );

};

export default Users;