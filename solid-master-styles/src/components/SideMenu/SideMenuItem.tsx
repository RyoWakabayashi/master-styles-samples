import type { Component } from 'solid-js'
import { Link } from 'solid-app-router'

export interface SideMenuItemProps {
  label: string
  route: string
  currentMenu: string
}

export const SideMenuItem: Component<SideMenuItemProps> = (props: SideMenuItemProps) => {
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

  return (
    <Link
      className={`${classNames} ${props.currentMenu === props.route ? 'active' : ''}`}
      href={`/${props.route}`}
    >
      <div className='lines:1 break-word' style={{ whiteSpace: 'nowrap' }}>
        {props.label}
      </div>
    </Link>
  )
}
