import React from 'react'

function Alternate(props) {
  return (
    <div className={props.mainClassName}>
        <span className={props.spanClassName} >{props.spanValue}</span>
        <a href='#id'>{props.aValue}</a>
    </div>
  )
}

export default Alternate