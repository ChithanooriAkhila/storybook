import React from 'react'
import { Medium } from '../Input/Input.stories'
import { Success } from '../Button/Button.stories'

export default {
    title:'form/Subscription'
}

export const Subscription = () =>(
    <>
        {/* change in Medium and Success stories will react in this story as well */}
        <Medium />
        <Success />
    </>
)