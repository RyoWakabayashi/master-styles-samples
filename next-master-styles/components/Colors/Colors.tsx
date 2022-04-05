import React, { useState, useEffect } from 'react'
import { Style } from '@master/style'
import { ColorBlock } from './ColorBlock'
import { ColorBelt } from './ColorBelt'
import { OpacityDemo } from './OpacityDemo'

export const Colors: React.FC = () => {
  const [colors, setColors] = useState([])

  useEffect(() => {
    setColors(Object.keys(Style.colors))
  }, [])

  const classNames = [
    'p:20',
    'background-color:gray-99',
    'font-color:white'
  ].join(' ')

  return (
    <div className={classNames}>
      <h2 className='font:32 font:heavy font:italic m:10'>Colors</h2>
      <div className='grid-cols:3 grid-cols:5@md gap:15'>
        {
          colors.map((color, index) => {
            return (
              <ColorBlock
                colorName={color}
                key={index}
              />
            )
          })
        }
      </div>
      <div className='grid-cols:1 gap:10'>
        {
          colors
            .filter(color => !Style.singleColors.includes(color))
            .map((color, index) => {
              return (
                <ColorBelt
                  colorName={color}
                  key={index}
                />
              )
            })
        }
      </div>
      <div className='mt:2rem'>
        <OpacityDemo />
      </div>
    </div>
  )
}
