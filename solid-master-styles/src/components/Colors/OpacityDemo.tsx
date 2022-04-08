import type { Component } from 'solid-js'
import { createSignal, createEffect, For } from 'solid-js'
import { OpacityButton } from './OpacityButton'
import { DEMO } from '../../classes/demo'

export const OpacityDemo: Component = () => {
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
  const [getOpacity, setOpacity] = createSignal('.5')
  const [getBlockClassName, setBlockClassName] = createSignal(
    `${blockClassNamePrefix} background-color:blue/${getOpacity()}!`
  )

  createEffect(() => {
    setBlockClassName(`${blockClassNamePrefix} background-color:blue/${getOpacity()}!`)
  })

  return (
    <div>
      <h2 className='font:24 font:heavy m:10'>Opacity</h2>
      <div className='d:flex flex:wrap gap:5 my:10'>
        <For each={opacities}>
          {(opacity) => {
            return (
              <OpacityButton
                opacity={opacity}
                onClick={() => setOpacity(opacity)}
              />
            )
          }}
        </For>
      </div>
      <div className={DEMO}>
        <div className={getBlockClassName()}>
          <code className='f:14 font-color:inherit!'>
            background-color:blue/{getOpacity()}
          </code>
        </div>
      </div>
    </div>
  )
}
