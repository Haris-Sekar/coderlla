import React from 'react'
import Form from './Form'
import '../css/loginStyle.css'

function ContainerRight(props) {
  return (
    <div className={props.className}>
        <Form className='login-form' />
    </div>
  )
}

export default ContainerRight