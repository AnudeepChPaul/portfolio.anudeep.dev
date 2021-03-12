// import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import { AppContext } from '../../Context'
import './Header.scss'

const HeaderComp = () => {
  return (
    <AppContext.Consumer>
      {({ links, toggleTheme }) => (
        <header className='headerWrapper'>
          <h1> Anudeep </h1>
          <button className="themeToggle fas fa-adjust" onClick={() => toggleTheme()}> </button>
        </header>
      )}
    </AppContext.Consumer>
  )
}


export default HeaderComp
