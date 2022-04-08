import type { Component } from 'solid-js'

export interface ColorBlockProps {
  colorName: string
}

export const ColorBlock: Component<ColorBlockProps> = (props: ColorBlockProps) => {
  return (
    <div>
      <div className={`h:40 r:3 background-color:${props.colorName}`} />
      <div className='mt:5 d:flex align-items:center'>
        <span className='f:14 f:semibold'>{props.colorName}</span>
      </div>
    </div>
  )
}
