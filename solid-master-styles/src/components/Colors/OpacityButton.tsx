import type { Component } from 'solid-js'

export interface OpacityButtonProps {
  opacity: string
  onClick: () => void
}

export const OpacityButton: Component<OpacityButtonProps> = (props: OpacityButtonProps) => {
  const classNames = [
    'bg:fade-5/.8',
    'bg:fade-13/.6:hover',
    'bg:gray-87/.5@dark',
    'bg:gray-87:hover@dark',
    'r:3',
    'px:7',
    'f:mono',
    'h:1.5rem',
    'f:12',
    'f:fade-76',
    'f:gray-34@dark',
    'cursor:pointer',
    'outlined'
  ].join(' ')

  return (
    <button type='button' className={classNames} onClick={() => props.onClick()}>
      <code>background-color:blue/{props.opacity}</code>
    </button>
  )
}
