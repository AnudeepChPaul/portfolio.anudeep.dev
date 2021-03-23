import * as React from 'react'
import { forwardRef } from 'react'
import classes from './Skills.module.scss'
import { PercentageRing } from '../../shared/PercentageRing'
import * as PropTypes from 'prop-types'

const Top10 = forwardRef((props, ref) => {
  const fontSize = 16//parseInt(getComputedStyle(document.documentElement).getPropertyValue('font-size'))
  const progress = (Math.floor(Math.random() * 30) + 60)

  return (
    <article className={classes.topSkills}>
      {props.skills.map((skill, index) => {
        return (
          <div key={index} className={classes.skillQuickDisplay}>
            <PercentageRing progress={progress} radius={fontSize * 5} stroke={5}/>
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
