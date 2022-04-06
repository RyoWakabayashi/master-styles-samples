import type { NextPage } from 'next'
import '@master/styles'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Colors } from '../../components/Colors'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const ColorsPage: NextPage = () => {
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
