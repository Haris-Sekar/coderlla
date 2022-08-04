import React from 'react'
import '../../css/loginStyle.css'
// import WebName from './WebName'

function Logo(props) {
  return (
    <div className={props.className} >
      <img src={props.src} alt={props.alt} />
        <div className={props.websiteName}>
          <div class="blue-name">Cod</div>
          <div class="white-name">Rella</div>
        </div> 
    </div>
  )
}

export default Logo;