
import * as React from 'react'
import { forwardRef } from 'react'
import './Skills.scss'
import { PercentageRing } from '../shared/PercentageRing'
import * as PropTypes from 'prop-types'

const Top10 = forwardRef((props, ref) => {
  return (
    <article className='topSkills'>
      {props.skills.map((skill, index) => {
        const progress = (Math.floor(Math.random() * 30) + 60)
        return (
          <div key={index} className='skillQuickDisplay'>
            <PercentageRing progress={progress} radius={64} stroke={4}/>
            <h3>{skill}</h3>
            <p>{progress + '%'}</p>
          </div>
        )
      })}
    </article>
  )
})

Top10.propTypes = {
  skills: PropTypes.array
}


export default Top10
