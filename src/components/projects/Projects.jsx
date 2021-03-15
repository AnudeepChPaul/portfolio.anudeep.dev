import * as React from 'react'
import './Projects.scss'
import PropTypes from 'prop-types'

const Projects = React.forwardRef((props, ref) => {
  return (
    <section className="projects">
      <h2>Professional Career:</h2>
      <hr className="journeyConnector"/>
      <ul>
        {props.companies.map((comp, index) => {
          const classNames = ['companyInfoWrapper'];

          if ((index + 1) % 2 === 0) {
            classNames.push('right')
          }
          return (
            <li key={comp.name} className={classNames.join(' ')}>
              <article className='companyInfo'>
                <p>{comp.duration}</p>
                <h3>{comp.name}</h3>
                <p>Exposure with:</p>
                <ul className="projectInfo">
                  {comp.projects.map((project) => (
                    <li key={project.name}>
                      <p>{project.name}</p>
                      <span>Technologies Used: {project.technologies.join(', ')}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
});

Projects.propTypes = {
  companies: PropTypes.array
};

export default Projects
