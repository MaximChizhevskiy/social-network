import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";
import {
    getAuthUserDataThunkCreator,
    MeResponseDataType,
} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateReduxType> {
    componentDidMount() {
        authAPI.me()
    }

    render() {
        return <Header {...this.props} />
    }
}

let AuthMapStateToProps = (state: StateReduxType): AuthMapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(AuthMapStateToProps, {getAuthUserData: getAuthUserDataThunkCreator})(HeaderContainer);

type AuthMapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type AuthMapDispatchToPropsType = {
    getAuthUserData: (data: MeResponseDataType) => void
}

export type HeaderContainerPropsType =
    AuthMapStateToPropsType
    & AuthMapDispatchToPropsType
