import * as React from 'react'
import { AppContext } from '../Context'
import './Header.scss'

const downloadPDF = async () => {
	// TODO: Implementation
}

const HeaderComp = () => {
  return (
    <AppContext.Consumer>
			{({ links, toggleTheme }) => (
        <header className='headerWrapper'>
          <div className="headerInner">
            <h1> Anudeep </h1>
            <div className="headerBtnWrapper">
							<button className="headerBtn fas fa-file-download" onClick={() => downloadPDF()}
											aria-labelledby="download-resume"/>
							<button className="headerBtn themeToggle fas fa-adjust" onClick={() => toggleTheme()}
											aria-labelledby="theme-toggler"/>
            </div>
          </div>
        </header>
      )}
    </AppContext.Consumer>
  )
}


export default HeaderComp
