import * as React from 'react'
import HeaderComp from '../components/shared/Header'
import './DefaultLayout.scss'
import { AppContext } from '../Context'

// markup
const DefaultLayout = (props) => {
  return (
    <AppContext.Consumer>
      {({ theme }) => {
        const classNames = `wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`
        return (
          <div className={classNames}>
            <HeaderComp/>
            {props.children}
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default DefaultLayout
