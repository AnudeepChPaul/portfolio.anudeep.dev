import * as React from 'react'
import './Header.scss'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as PropTypes from 'prop-types'


const downloadPDF = async () => {
  // TODO: Implementation
}

const HeaderComp = (props) => {
//   window.anime = anime
//   window.useTriggerTransition = useTriggerTransition({
//     exit: {
//       length: 1
//       , trigger: ({ exit, node }) => {
//         debugger
//       }
//     }
//     , entry: {
//       length: 0.5
//       , delay: 0.5
//       , trigger: ({ exit, node }) => {
// debugger
//         anime({
//           triggers: node
//           , translateX: [ 0, -1000 ]
//           , opacity: [ 1, 0 ]
//         })
//       }
//     }
//   })
  return (
    <header className='headerWrapper'>
      <div className="headerInner">
        <h1> Anudeep </h1>
        <div className="headerBtnWrapper">
          <AniLink paintDrip to="/" className="headerBtn" duration={1} color="lightyellow">Home</AniLink>
          <AniLink paintDrip to="skills" className="headerBtn" color="lightyellow" duration={1}>Skills</AniLink>
          {/*<AniLink cover direction="left" to="skills" className="headerBtn" bg="#fff5ea">Skills</AniLink>*/}
          <button className="headerBtn" onClick={() => downloadPDF()}
            aria-labelledby="download-resume">Download Resume
          </button>
          <button className="headerBtn themeToggle fas fa-adjust" onClick={() => props.toggleTheme()}
            aria-labelledby="theme-toggler"/>
        </div>

        {/*Best viewed in <i className="fab fa-chrome"></i> <i className="fab fa-firefox"></i>*/}
      </div>
      {/*<div className="styler"></div>*/}
    </header>
  )
}

HeaderComp.propTypes = {
  toggleTheme: PropTypes.func
}

export default HeaderComp
