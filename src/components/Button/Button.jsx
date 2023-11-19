import React from 'react';
import s from "./Button.module.css"
function Button(props) {
    const buttonStyle = {
        color:props.color,
        background:props.background
    }
    return (
        <button style={buttonStyle}
                className={s.button}
                onClick={props.handleClick ? () => props.handleClick(true) : null}
        >
            {props.icon && <span> {props.icon} </span>} {props.text}
        </button>
    );
}

export default Button;