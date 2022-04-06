import React from 'react'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Colors } from '../../components/Colors'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const ColorsPage: React.FC = () => {
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
