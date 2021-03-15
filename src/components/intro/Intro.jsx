// import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import {useEffect} from 'react'
import './Intro.scss'
import PropTypes from 'prop-types'


const Intro = React.forwardRef((props, ref) => {
  useEffect(() => {
    if (!ref.current) {

    }

    // const trigger = '.wrapper'
    //   , pin = document.querySelector('.introSection')
    //   , video = document.querySelector('video')
    //
    // const controller = new window.ScrollMagic.Controller()
    // const tween = window.TweenMax.staggerFromTo('.bioArticle > h2', 2, { opacity: 0, rotateX:'90deg' }, { opacity: 1, rotateX: '0deg' }, 1)
    //
    // const scene1 = new window.ScrollMagic.Scene({
    //   triggerElement: trigger
    //   , triggerHook: 0
    //   , duration: 1000
    //   , reverse: true
    // }).addTo(controller)
    //   .setPin(pin)
    //   .setTween(tween)
    //   .addIndicators()
  });


  return (
    <section className='introSection animated' ref={ref}>
      <div className="introSectionInner">
        <article className='picArticle'/>
        <article className='bioArticle'>
          <hr style={{width: ' 25rem', margin: 0}}/>
          <h2 style={{fontSize: '1.6rem'}}>{props.header}</h2>
          <h3>{props.tagline}</h3>
          <p dangerouslySetInnerHTML={{__html: props.description}}></p>
        </article>
      </div>
    </section>
  )
});

Intro.propTypes = {
  header: PropTypes.string
  , tagline: PropTypes.string
  , description: PropTypes.string
};

export default Intro
