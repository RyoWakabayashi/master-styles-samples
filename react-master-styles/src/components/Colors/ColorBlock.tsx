import React from 'react'

export interface ColorBlockProps {
  colorName: string
}

export const ColorBlock: React.FC<ColorBlockProps> = (props: ColorBlockProps) => {
  return (
    <div>
      <div className={`h:40 background-color:${props.colorName}`} />
      <div className='mt:5 d:flex align-items:center'>
        <span className='f:14 f:semibold'>{props.colorName}</span>
      </div>
    </div>
  )
}
