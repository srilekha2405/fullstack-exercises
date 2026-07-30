/* eslint-disable no-unused-vars */
import React from 'react'
import StaticLine from './StaticLine'

const Statastics = (props) => {
    const {good,bad,neutral,average,positive}=props
  return (
      <table>
        <tbody>
      <StaticLine text="good" value={good}/>
      <StaticLine text="neutral" value={neutral}/>
      <StaticLine text="bad" value={bad}/>
      <StaticLine text="average" value={average}/>
      <StaticLine text="positive" value={`${positive}`}/>
       </tbody>
      </table>
  )
}

export default Statastics
