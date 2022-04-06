import React from 'react'
import { useRouter } from 'next/router'

export interface SideMenuItemProps {
  label: string
  route: string
  currentMenu: string
}

export const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps) => {
  const router = useRouter()

  const classNames = [
    'block:not([hidden])',
    'r:5 px:12',
    'lh:1.5rem',
    'f:14',
    'f:fade-68',
    'f:gray-45@dark',
    'f:fade-92:hover',
    'f:gray-12:hover@dark',
    'f:bold.active',
    'f:black.active',
    'f:gray-12.active@dark',
    'bg:fade-5:hover:not(.active)',
    'bg:gray-87:hover:not(.active)@dark',
    'contain:content'
  ].join(' ')

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    router.push(`/${props.route}`)
  }

  return (
    <a
      className={`${classNames} ${props.currentMenu === props.route ? 'active' : ''}`}
      href={`/${props.route}`}
    >
      <div className='lines:1 break-word' style={{ whiteSpace: 'nowrap' }}>
        {props.label}
      </div>
    </a>
  )
}
