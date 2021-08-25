import React from 'react'
import { LinkHeader } from './nav.styles'

const Nav = () => {

    return (
        <nav>
        <LinkHeader to="/alarm">
        Alarm
        </LinkHeader >
        <LinkHeader to="/stopwatch">
        Stopwatch
        </LinkHeader>
        <LinkHeader to="/timer">
        timer
        </LinkHeader>
        </nav>



    )
}
export default Nav