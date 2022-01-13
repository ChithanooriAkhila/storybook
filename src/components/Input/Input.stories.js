import React from 'react'
import Input from './Input'
import Center from '../Center/Center'

export default{
    title:'form/Input',
    decorators : [story => <Center>{story()}</Center>]
}

export const Small = () => <Input size='small' />
export const Medium = () => <Input size='medium' />
export const Large = () => <Input size='large' />

// Small.storyName = 'Small Input'