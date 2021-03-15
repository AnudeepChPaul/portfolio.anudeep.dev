import * as React from 'react'
import {createRef} from 'react'
import {AppContext} from '../Context'
import Intro from './intro/Intro'
import Skills from './skills/Skills'
import './ResumeView.scss'
import Projects from './projects/Projects'

const ResumeView = () => {
  let introRef = createRef()
    , skillRef = createRef();

  return (
    <AppContext.Consumer>
      {({intro, companies}) => (
        <main className='mainView'>
          <Intro {...intro} ref={introRef}/>
          <Skills ref={skillRef}/>
          <Projects companies={companies}/>
        </main>
      )}
    </AppContext.Consumer>
  )
};

export default ResumeView
