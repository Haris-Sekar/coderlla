import React from 'react'
import '../css/loginStyle.css'

function Button(props) {
  return (
    <div className={props.className}>
        <button className={props.btnclassName} type='submit'>{props.value}</button>
    </div>
  )
}

export default Button