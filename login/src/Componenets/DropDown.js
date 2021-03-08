import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
function DropDown({isOpen,toggle}) {
    return (
        <div style={{backgroundColor:"#050B21"}} className={isOpen ? "visible md:hidden grid grid-rows-4 text-center items-center ":'hidden'} onClick={toggle}>
            <NavLink />
        </div>
    )
}

export default DropDown
