import './Skills.scss'
import * as React from 'react'
import {forwardRef} from 'react'
import {AppContext} from '../../Context'
import AllSkills from './AllSkills'
import Top10 from './Top10'

const Skills = forwardRef((props, ref) => {
  return (
    <AppContext.Consumer>
      {({top10Skills, skillSet}) => (
        <section className='skillSection' ref={ref}>
          <div className="skillSectionInner">
            <h2>Top 10 Skills:</h2>
            <Top10 skills={top10Skills}/>
            <h2>Professional Skills:</h2>
            <AllSkills skillSets={skillSet}/>
          </div>
        </section>)}
    </AppContext.Consumer>
  )
});


export default Skills
