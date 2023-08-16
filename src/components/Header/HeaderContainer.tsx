import React, {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {AuthInitialStateType, MeResponseDataType, setAuthUserDataActionCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateReduxType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0) {
                let data = response.data.data
                this.props.setAuthUserData(data)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

let AuthMapStateToProps = (state: StateReduxType): AuthMapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(AuthMapStateToProps, {setAuthUserData: setAuthUserDataActionCreator})(HeaderContainer);

type AuthMapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type AuthMapDispatchToPropsType = {
    setAuthUserData: (data: MeResponseDataType) => void
}

export type HeaderContainerPropsType =
    AuthMapStateToPropsType
    & AuthMapDispatchToPropsType
