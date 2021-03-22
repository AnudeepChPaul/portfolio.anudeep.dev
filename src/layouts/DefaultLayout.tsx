import * as React from 'react'
import { forwardRef, useEffect, useState } from 'react'
import HeaderComp from '../shared/Header'
import './DefaultLayout.scss'
import * as PropTypes from 'prop-types'
import { AppContext } from '../Context'
import withEvents from '../components/WithEvents'

const links = [
  'Skills'
  , 'Career'
  , 'About'
]

const top10Skills = [
  'JS'
  , 'SASS'
  , 'HTML5'
  , 'Python'
  , 'Nodejs'
  , 'Mongodb'
  , 'MySQL'
  , 'GraphQL'
  , 'Docker'
  , 'Shell'
]

const skillSet = [
  {
    type: 'Languages'
    , skills: [
      {
        icon: 'fab fa-js'
        , text: 'Javascript'
      }
      , {
        icon: 'fab fa-css3'
        , text: 'CSS3'
      }
      , {
        icon: 'fab fa-html5'
        , text: 'HTML5'
      }
      , {
        icon: 'fab fa-python'
        , text: 'Python'
      }
      , {
        icon: 'fab fa-sass'
        , text: 'SASS'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'MongoDB'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'MySQL'
      }
      , {
        icon: 'fab fa-linux'
        , text: 'Shell, Bash'
      }
    ]
  }
  , {
    type: 'Frameworks/Libraries'
    , skills: [
      {
        icon: 'fa fa-cog'
        , text: 'GraphQL'
      }
      , {
        icon: 'fab fa-react'
        , text: 'React js'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'EXTjs'
      }
      , {
        icon: 'fab fa-node-js'
        , text: 'Node.js'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'Cordova'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'Express js'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'Redux'
      }
      , {
        icon: 'fa fa-cog'
        , text: 'JWT Authentication'
      }
      , {
        icon: 'fab fa-angular'
        , text: 'Angular'
      }
    ]
  }
  , {
    type: 'Systems / Tools'
    , skills: [
      {
        icon: 'fab fa-docker'
        , text: 'Docker'
      }
      , {
        icon: 'fab fa-suse'
        , text: 'Open SUSE'
      }
      , {
        icon: 'fab fa-ubuntu'
        , text: 'Ubuntu'
      }
      , {
        icon: 'fab fa-bitbucket'
        , text: 'Bitbucket'
      }
      , {
        icon: 'fab fa-github'
        , text: 'Github'
      }
    ]
  }
]

const intro = {
  header: 'ANUDEEP CHANDRA PAUL'
  ,
  tagline: 'Full Stack Web Developer | AI-ML Engineer'
  ,
  description: 'I am a <b>Full Stack Web Developer</b> who\'s also proficient in <b>Artificial Intelligence & Machine Learning</b>.'
}

const companies = [
  {
    name: 'InQuest Technologies'
    , duration: 'From 7th Jan 2016 to 30th April 2018'
    , projects: [
      {
        name: 'IQSketch'
        , technologies: [
          'EXTjs'
          , 'C#'
          , 'Nodejs'
          , 'MSSQL'
        ]
      }
    ]
  }
  , {
    name: 'Zycus Infotech'
    , duration: 'From 1st May 2018 to 30th June 2018'
    , projects: [
      {
        name: 'BFF'
        , technologies: [ 'Nodejs', 'Redis' ]
      }
    ]
  }
  , {
    name: 'Manhattan Associates'
    , duration: 'From 11th July 2018 to Current'
    , projects: [
      {
        name: 'DMMobile'
        , technologies: [
          'Cordova'
          , 'Bash'
          , 'EXTjs'
          , 'MySQL'
          , 'SpringBoot'
        ]
      }
    ]
  }
]

const DefaultLayout = forwardRef( (props, ref) => {
  const [ theme, setTheme ] = useState( 'light' )

  const toggleTheme = (): void => {
    setTheme( theme === 'dark' ? 'light' : 'dark' )
  }

  useEffect( () => {
    window.scrollTo( { top: 0, left: 0, behavior: 'smooth' } )
    console.log( 'default layout componentDidMount' )
  }, [] )

  console.log( 'default layout render: ', theme )

  const classNames = `wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`

  return (
    <div className={classNames} ref={ref}>
      <div className="styler"></div>
      <AppContext.Provider value={{ links, top10Skills, theme, skillSet, intro, companies }}>
        <HeaderComp toggleTheme={toggleTheme}/>
        <main className='mainView'>
          {props.children}
        </main>
      </AppContext.Provider>
    </div>
  )
} )

DefaultLayout.propTypes = {
  theme: PropTypes.string
}

export default withEvents( DefaultLayout )