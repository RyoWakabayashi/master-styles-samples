import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { DEMO } from '../../classes/demo'
import { AnimationDemo } from './AnimationDemo'
import animationClasses from './animationClasses'

export const Animations: Component = () => {
  return (
    <div>
      <h2 className='font:32 font:heavy font:italic m:10'>
        Animations
      </h2>
      <div className={`${DEMO} justify-content:start! grid-cols:4! gap:60;20`}>
        <For each={animationClasses}>
          {(animationClass) => {
            return (
              <AnimationDemo
                animationClass={animationClass}
              />
            )
          }}
        </For>
      </div>
    </div>
  )
}
