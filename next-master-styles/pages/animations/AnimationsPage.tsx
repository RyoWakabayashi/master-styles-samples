import type { NextPage } from 'next'
import '@master/styles'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Animations } from '../../components/Animations'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const AnimationsPage: NextPage = () => {
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
