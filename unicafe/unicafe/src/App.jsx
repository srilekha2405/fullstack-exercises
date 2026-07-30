/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Statastics from './Statastics'
import Button from './Button'

const App = () => {
  const [good,setGood]=useState(0)
  const [bad,setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [clicks,setClicks]=useState(0)
  const total=good+bad+neutral
  const average=(good-bad)/total
  const positive=(good/total)*100
  const setgood=()=>setGood(good+1)
  const setbad=()=>setBad(bad+1)
  const setneutral=()=>setNeutral(neutral+1)
  return (
    <div>
    <div>
      <h1>give feedback</h1>
      <Button onClick={setgood} text="good"/>
      <Button onClick={setneutral} text="neutral"/>
      <Button onClick={setbad} text="bad"/>
    </div>
    {total===0?(<p>No feedback is given</p>)
    :
    <div>
      <h2>Statastics</h2>
      <Statastics good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
    </div>
    }
    </div>
  )
}

export default App
