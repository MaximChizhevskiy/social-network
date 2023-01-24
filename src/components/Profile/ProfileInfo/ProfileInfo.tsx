import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props:any) => {
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg' alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                Ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;