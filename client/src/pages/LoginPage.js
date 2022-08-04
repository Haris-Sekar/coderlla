import React from 'react'
import ContainerLeft from '../components/ContainerLeft'
import NavBar from '../components/NavBar/NavBar'
import ContainerRight from '../components/ContainerRight'
function LoginPage() {
  return (
    <div>
        <NavBar className='nav-bar' />
        <div className='container-body'>
          {/* <h1>Hello</h1> */}
            <ContainerLeft className='container-left' />
            <ContainerRight className='container-right' />
        </div>
        
    </div>
  )
}

export default LoginPage