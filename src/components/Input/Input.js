import React from 'react'
import './Input.css'

function Input(props) {
    const { size } = props
    return (
        <input type='text' className={`input ${size}`} placeholder={`${size} size`} />
    )
}

export default Input
