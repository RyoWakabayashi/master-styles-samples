import React, { useState, useEffect } from 'react'
import { OpacityButton } from './OpacityButton'
import { DEMO } from '../../classes/demo'

export const OpacityDemo: React.FC = () => {
  const opacities = [
    '0',
    '.25',
    '.5',
    '.75',
    '1'
  ]
  const blockClassNamePrefix = [
    'align-items:center',
    'border:4;solid;transparent',
    'd:block',
    'd:flex',
    'f:white',
    'p:5;15'
  ].join(' ')
  const [currentOpacity, setOpacity] = useState('.5')
  const [blockClassName, setBlockClassName] = useState(
    `${blockClassNamePrefix} background-color:blue/${currentOpacity}!`
  )

  useEffect(() => {
    setBlockClassName(`${blockClassNamePrefix} background-color:blue/${currentOpacity}!`)
  }, [blockClassNamePrefix, currentOpacity])

  return (
    <div>
      <h2 className='font:24 font:heavy m:10'>Opacity</h2>
      <div className='d:flex flex:wrap gap:5 my:10'>
        {
          opacities.map((opacity, index) => {
            return (
              <OpacityButton
                opacity={opacity}
                onClick={() => setOpacity(opacity)}
                key={index}
              />
            )
          })
        }
      </div>
      <div className={DEMO}>
        <div className={blockClassName}>
          <code className='f:14 font-color:inherit!'>
            background-color:blue/{currentOpacity}
          </code>
        </div>
      </div>
    </div>
  )
}
