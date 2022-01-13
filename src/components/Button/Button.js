import React from 'react'
import './Button.css'
function Button(props) {
    const {variant='success', children } = props
    return (
        <button className={`button ${variant}`} > {children} </button>
    );
}

export default Button
