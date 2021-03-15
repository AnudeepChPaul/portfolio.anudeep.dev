import * as React from 'react'
import HeaderComp from '../shared/Header'
import './DefaultLayout.scss'
import { AppContext } from '../Context.ts'


const DefaultLayout = (props) => {
  return (
    <AppContext.Consumer>
			{({ theme }) => {
				const classNames = `wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`
        return (
          <div className={classNames}>
            <HeaderComp/>
            {props.children}
            <footer>
              Best viewed in <i className="fab fa-chrome"></i> <i className="fab fa-firefox"></i>
            </footer>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default DefaultLayout
