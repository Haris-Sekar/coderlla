import React from 'react'
import '../../css/loginStyle.css'

function NavButtons(props) {
  return (
    <div className={props.className}>
        <div class="nav-button-items">
            <a href="#home" id="buttons">Home</a>
            <a href="#about" id="buttons">About</a>
            <a href="#workspace" id="buttons">Workspace</a>
            <a href="#contact" id="buttons">Contact</a>
            <a href="#login" id="buttons">Login / SignUp</a>
        </div>
    </div>
  )
}

export default NavButtons