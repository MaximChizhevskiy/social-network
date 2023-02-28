import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileTypes} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";


type ProfileInfoPropsType = {
profile: ProfileTypes

}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    console.log(props)
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/04/06/69/4958106611a2dbe.jpg' alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={''}/>
                Ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;