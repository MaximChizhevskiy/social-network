import React from "react";

type HeaderPropsType = {
    value: string;
}

export function Header(props: HeaderPropsType) {
    return (
        <>
            <a href={'#s'}>{props.value}</a>
        </>
    );
}