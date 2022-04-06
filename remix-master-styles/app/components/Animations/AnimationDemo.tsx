import React from 'react'

export interface AnimationDemoProps {
  animationClass: string
}

export const AnimationDemo: React.FC<AnimationDemoProps> = (props: AnimationDemoProps) => {
  return (
    <div className='d:flex flex:col w:full align-items:center'>
      <code className='f:12'>{props.animationClass}</code>
      <div className='d:flex mt:25 justify-content:center'>
        <div className={`${props.animationClass} b:1;solid;blue-47 bg:blue-47/.1 p:30 r:5`} />
      </div>
    </div>
  )
}
