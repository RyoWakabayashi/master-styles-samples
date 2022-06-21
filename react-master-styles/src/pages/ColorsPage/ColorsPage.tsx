import React, { useState, useEffect, useRef } from 'react'

import { ContentHeader } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Colors } from '../../components/Colors'
import { MAIN_CONTENT } from '../../classes/mainContent'

export const ColorsPage: React.FC = () => {
  const refArray = useRef([] as number[])
  const [count, setCount] = useState(0)

  useEffect(() => {
    refArray.current.push(count)
    refArray.current.sort((a, b) => a - b)
    console.log(refArray.current)
  }, [count])

  useEffect(() => {
    refArray.current = []
    Array(3).fill(0).map((_, index) => {
      setTimeout(() => {
        Array(100).fill(0).map((_, sub) => {
          setTimeout(() => {
            setCount(sub)
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
              refArray.current.map((value, index) => {
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
