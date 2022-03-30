import React from 'react'
import { ColorBlock } from './ColorBlock'
import { ColorBelt } from './ColorBelt'
import '@master/styles'

export const Colors: React.FC = () => {
  const colors = [
    'fade',
    'gray',
    'brown',
    'orange',
    'gold',
    'yellow',
    'grass',
    'green',
    'beryl',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'crimson',
    'red'
  ]

  const classNames = [
    'p:20',
    'background-color:gray-99',
    'font-color:white'
  ].join(' ')

  return (
    <div className={classNames}>
      <h2 className='font:32 font:heavy font:italic m:10'>Colors</h2>
      <div className='grid-cols:3 grid-cols:5@md gap:15'>
        <ColorBlock colorName='black' />
        <ColorBlock colorName='white' />
        {
          colors.map((color) => {
            return (
              <ColorBlock colorName={color} key={color} />
            )
          })
        }
      </div>
      <div className='grid-cols:1 gap:10'>
        {
          colors.map((color) => {
            return (
              <ColorBelt colorName={color} key={color} />
            )
          })
        }
      </div>
    </div>
  )
}
