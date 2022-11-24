import React from "react";

type TechnologiesPropsType = {
value: string;
}

export function Technologies(props:TechnologiesPropsType){
    return (
        <div>
            <ul>
                <li>{props.value}</li>
            </ul>
        </div>
    );
}
