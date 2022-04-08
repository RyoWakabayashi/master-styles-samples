import type { Component } from 'solid-js'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Colors } from '../../components/Colors'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const ColorsPage: Component = () => {
  return (
    <div>
      <ContentHeader />
      <div className={MAIN_CONTENT}>
        <SideMenu currentMenu='colors' />
        <Colors />
      </div>
    </div>
  )
}
