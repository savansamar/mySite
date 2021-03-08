import { TramRounded } from '@material-ui/icons'
import React from 'react'
import { Link,Redirect,withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../Form/FormBackend'
import NavLink from './NavLink'

const NavBar=({toggle})=>{

    
    return (
        <nav  style={{backgroundColor:"#050B21"}} className="flex justify-between  items-center h-16  text-black relative shadow-sm font-mono"
        role='navigation'
        >
        <div style={{backgroundColor:"#d1d1d1"}} className="px-4 current-ponter rounded-lg md:hidden" onClick={toggle}>
        
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
        <div className="pr-8 md:block hidden">
       <NavLink />
       </div>
        </nav>
    )
}

export default NavBar
