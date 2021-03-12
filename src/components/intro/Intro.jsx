// import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import './Intro.scss'
import PropTypes from 'prop-types'


const Intro = React.forwardRef((props, ref) => {
  return (
    <section className='introSection' ref={ref}>
      <article className='picArticle'/>
      <article className='bioArticle'>
        <hr style={{ width:' 25rem', margin: 0 }}/>
        <h2 style={{ fontSize: '1.6rem' }}>{props.header}</h2>
        <h3>{props.tagline}</h3>
        <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
      </article>
    </section>
  )
})

Intro.propTypes = {
  header: PropTypes.string
  , tagline: PropTypes.string
  , description: PropTypes.string
}

export default Intro
