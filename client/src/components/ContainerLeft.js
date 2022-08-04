import React from 'react' 
import left from '../resources/left.png'
import '../css/loginStyle.css'

function ContainerLeft(props) {
  return (
    <div className={props.className}>
        <div className='logo-wrapper' >
          <div className='logo' >
            <img src={left} alt='Logo' />
          </div> 
        </div>
    </div>
  )
}

export default ContainerLeft