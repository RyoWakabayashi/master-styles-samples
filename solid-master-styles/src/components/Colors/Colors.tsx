import type { Component } from 'solid-js'
import { createSignal, createEffect, For } from 'solid-js'
import { Style } from '@master/style'
import { ColorBlock } from './ColorBlock'
import { ColorBelt } from './ColorBelt'
import { OpacityDemo } from './OpacityDemo'

export const Colors: Component = () => {
  const [getColors, setColors] = createSignal([''])
  const [getBeltColors, setBeltColors] = createSignal([''])

  createEffect(() => {
    const colors = Object.keys(Style.colors)
    setColors(colors)
    setBeltColors(colors.filter(color => !Style.singleColors.includes(color)))
  }, [])

  return (
    <div>
      <h2 className='font:32 font:heavy font:italic m:10'>Colors</h2>
      <div className='m:16 grid-cols:3 grid-cols:5@md gap:15'>
        <For each={getColors()}>
          {(color) => {
            return (
              <ColorBlock
                colorName={color}
              />
            )
          }}
        </For>
      </div>
      <div className='m:16 grid-cols:1 gap:10'>
        <For each={getBeltColors()}>
          {(color) => {
            return (
              <ColorBelt
                colorName={color}
              />
            )
          }}
        </For>
      </div>
      <div className='mt:2rem'>
        <OpacityDemo />
      </div>
    </div>
  )
}
