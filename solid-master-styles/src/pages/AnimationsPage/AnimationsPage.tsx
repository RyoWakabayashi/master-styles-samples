import type { Component } from 'solid-js'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Animations } from '../../components/Animations'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const AnimationsPage: Component = () => {
  return (
    <div>
      <ContentHeader />
      <div className={MAIN_CONTENT}>
        <SideMenu currentMenu='animations' />
        <Animations />
      </div>
    </div>
  )
}
