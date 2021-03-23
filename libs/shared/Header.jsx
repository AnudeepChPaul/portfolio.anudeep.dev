import * as React from 'react'
import * as classes from './Header.module.scss'
import * as PropTypes from 'prop-types'
import Link from 'next/link'


const downloadPDF = async () => {
  // TODO: Implementation
  window.open('/vercel.svg', '_blank')
}

const HeaderComp = (props) => {
  return (
    <header className={classes.headerWrapper}>
      <div className="styler"></div>
      <div className={classes.headerInner}>
        <h1> Anudeep </h1>
        <div className={classes.headerBtnWrapper}>
          <Link paintDrip href="/" duration={1} color="lightyellow">
            <a className={classes.headerBtn}>Home</a>
          </Link>
          <Link paintDrip href="/skills" color="lightyellow" duration={1}>
            <a className={classes.headerBtn}>Skills</a>
          </Link>
          {/*<Link cover direction="left" href="skills" className={classes.headerBtn" bg="#fff5ea">Skills</Link>*/}
          <a className={classes.headerBtn} href="" download="/vercel.svg" aria-labelledby="download-resume">
						Download Resume
          </a>
          <button className={`${classes.headerBtn} themeToggle fas fa-adjust"}`} onClick={() => props.toggleTheme()}
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
