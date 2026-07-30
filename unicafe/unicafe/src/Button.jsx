/* eslint-disable no-unused-vars */
import React from 'react'

const Button = (props) => {
    const {onClick,text}=props
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
