import React from 'react'

export interface ColorBeltProps {
  colorName: string
}

export const ColorBelt: React.FC<ColorBeltProps> = (props: ColorBeltProps) => {
  const levels = Array
    .from({ length: 100 })
    .map((_, level) => level)
    .filter(level => level > 0)

  return (
    <div>
      <div className='p:10;0 d:flex align-items:center'>
        <div className='mt:5 d:flex align-items:center'>
          <svg className={`w:16 h:16 mr:8 background-color:${props.colorName}`} />
          <span className='f:semibold'>{props.colorName}</span>
        </div>
      </div>
      <div className='d:flex flex:row overflow:hidden r:3'>
        {
        levels.map(level => {
          const classNames = [
            'd:flex',
            'flex-grow:1',
            'h:40',
            'white-space:nowrap',
            'overflow:hidden',
            'd:block:hover>div',
            `background-color:${props.colorName}-${level}`
          ]
          return (
            <div
              className={classNames.join(' ')}
              key={level}
            />
          )
        })
      }
      </div>
    </div>
  )
}
