import * as React from 'react'
import { useEffect, useState } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { AppContext } from '../Context'
import ResumeView from '../components/ResumeView'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import './index.scss'

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

let controller = null

const IndexPage = ({ data }: { data: { site: { siteMetadata: { title: string } } } }) => {
  const [ theme, setTheme ] = useState( 'light' )

  const toggleTheme = (): void => {
    setTheme( theme === 'dark' ? 'light' : 'dark' )
  }

  useEffect( () => {
    window.scrollTo( { top: 0, left: 0, behavior: 'smooth' } )
  }, [] )

  if ( typeof window !== 'undefined' ) {
    controller = controller || new window.ScrollMagic.Controller()
  }


  return (
    <AppContext.Provider value={{ links, top10Skills, theme, skillSet, toggleTheme, intro, data, companies }}>
      <Helmet title={data.site.siteMetadata.title} defer={false}>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://portfolio.anudeep.dev",
              "name": "Anudeep Chandra Paul",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7676250625",
                "contactType": "Personal Phone"
              }
            }
          `}
        </script>
      </Helmet>
      <React.StrictMode>
        {/*<video className="backgroundMotion" src="me.mp4" controls={false} autoPlay={true}/>*/}
        <DefaultLayout>
          <ResumeView/>
        </DefaultLayout>
      </React.StrictMode>
    </AppContext.Provider>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default IndexPage
