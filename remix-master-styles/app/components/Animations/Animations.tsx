import React from 'react'
import { DEMO } from '../../classes/demo'
import { AnimationDemo } from './AnimationDemo'
import animationClasses from './animationClasses'

export const Animations: React.FC = () => {
  return (
    <div>
      <h2 className='font:32 font:heavy font:italic m:10'>
        Animations
      </h2>
      <div className={`${DEMO} justify-content:start! grid-cols:4! gap:60;20`}>
        {
          animationClasses.map(animationClass => {
            return (
              <AnimationDemo
                key={animationClass}
                animationClass={animationClass}
              />
            )
          })
        }
      </div>
    </div>
  )
}
