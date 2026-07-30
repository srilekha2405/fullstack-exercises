/* eslint-disable no-unused-vars */
import React from 'react'

const StaticLine = (props) => {
    const {text,value}=props
  return (
    <tr>
      <td>{text}</td>
     <td>{value}</td> 
    </tr>
  )
}

export default StaticLine
