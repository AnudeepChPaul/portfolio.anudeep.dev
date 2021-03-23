import * as React from 'react'
import { forwardRef } from 'react'
import classes from './Skills.module.scss'
import PropTypes from 'prop-types'

const AllSkills = forwardRef((props, ref) => {
  return (

    <article className={classes.allSkills}>
      {props.skillSets.map(skillSet => {
        return (
          <table key={skillSet.type}>
            <thead>
              <tr>
                <th>
                  <h3>{skillSet.type}</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {skillSet.skills.map(skill => (<tr key={skill.text}>
                <td>
                  <i className={skill.icon}></i>
                  <span>{skill.text}</span>
                </td>
              </tr>))
              }
            </tbody>
          </table>
        )
      })}
    </article>
  )
})

AllSkills.propTypes = {
  skillSets: PropTypes.array
}

export default AllSkills
