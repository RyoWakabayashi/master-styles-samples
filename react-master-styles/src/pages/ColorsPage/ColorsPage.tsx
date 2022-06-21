import React, { useState, useEffect } from 'react'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Colors } from '../../components/Colors'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const ColorsPage: React.FC = () => {
  const [stateArray, setStateArray] = useState([] as number[])
  const [count, setCount] = useState(999)

  useEffect(() => {
    const tmpArray = [...stateArray, count]
    tmpArray.sort((a, b) => a - b)
    setStateArray(tmpArray)
  }, [count])

  useEffect(() => {
    setStateArray([])
    Array(3).fill(0).map((_, index) => {
      setTimeout(() => {
        Array(100).fill(0).map((_, sub) => {
          setTimeout(() => {
            setCount(index * 100 + sub)
          }, 1)
          return sub
        })
      }, 10)
      return index
    })
  }, [])

  return (
    <div>
      <ContentHeader />
      <div className={MAIN_CONTENT}>
        <SideMenu currentMenu='colors' />
        <Colors />
        <div className='d:flex flex:row'>
          <div>
            <p>ref</p>
            {
              stateArray.map((value, index) => {
                return (
                  <div key={index}>
                    {index}:{value}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
