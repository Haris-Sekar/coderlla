import React from 'react'
import '../../css/loginStyle.css'
import Logo from './Logo'
import logo from '../../resources/logo.png'
import NavButtons from './NavButtons'

function NavBar(props) {
  return (
    <div className={props.className}>
      <Logo src={logo} alt='Logo' className='logo-wrapper-nav' websiteName='website-name-nav' />
      <NavButtons className='nav-buttons' />
    </div>
  )
}

export default NavBar