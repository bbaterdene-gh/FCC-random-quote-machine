import { useState } from 'react'
import { Quote } from "./components/Quote"

export const App = () => {
  const colors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ]

  const [color, setColor] = useState(colors[ Math.floor( Math.random()*colors.length ) ])

  const changeColor = () => {
    setColor( colors[ Math.floor( Math.random()*colors.length ) ] )
  }
  return (
    <div className={`App flex justify-center items-center w-screen h-screen bg-${color}-300`}>
      <Quote color={color} changeColor={changeColor}/>
    </div>
  )
}