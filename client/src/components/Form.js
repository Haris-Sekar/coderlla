import React from 'react'
import '../css/loginStyle.css'
import Button from './Button'
import Alternate from './Alternate'
function Form(props) {
  return (
    <div className={props.className}>
        <div className='border'>
            <div className='input-fields' >
                <input type='text' placeholder='Email' />
            </div>
            <div className='input-fields' >
                <input type='password' placeholder='Password' />
            </div>
            <div className="forget-password-field">
                <span className="forget-password">Forget Password</span>
                <a href="#forget" id="click-me">Click-Me</a>
            </div>
            <Button className='input-fields' btnclassName='login-button' value='Login' />
            <Alternate mainClassName='sign-up' spanClassName='no-account' spanValue='Dont Have Account?' aValue='Sign Up for free' />
            
        </div>
    </div>
  )
}

export default Form