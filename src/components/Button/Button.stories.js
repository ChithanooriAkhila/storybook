import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
    title : 'form/Button',
    component : Button,
    decorators : [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary'> Primary</Button>

export const Secondary = () => <Button variant='secondary'>Secondary</Button>

export const Success = () =><Button variant='success'>Success</Button>

export const Danger = () =><Button variant='danger'>Danger</Button>

// export const Primary = () => <Center><Button variant='primary'> Primary</Button></Center>

// export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>

// export const Success = () =><Center><Button variant='success'>Success</Button></Center>

// export const Danger = () =><Center><Button variant='danger'>Danger</Button></Center>