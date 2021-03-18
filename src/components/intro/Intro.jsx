// import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import { useEffect } from 'react'
import './Intro.scss'
import PropTypes from 'prop-types'
import anime from 'animejs'


const Intro = React.forwardRef((props, ref) => {
  useEffect(() => {
    console.log('useEffect Intro.jsx')

    if ( typeof window === 'undefined' ) {
      return
    }

		const controller = new window.ScrollMagic.Controller()

    window.scrollTo({ top: 0, left: 0 })

    if ( !ref.current ) {
      return
    }

    const timeline = anime.timeline({
      easing    : 'easeOutExpo'
      , duration: 490
      , autoplay: false
    })

    timeline
      .add({
        targets  : '.name span'
        , opacity: [ 0, 1 ]
        , rotateX: [ '180deg', '0deg' ]
        , delay  : anime.stagger(100)
      })
      .add({
        targets  : '.name'
        , opacity: [ 1, 0 ]
      })
      .add({
        targets  : '.designation .first span'
        , opacity: [ 0, 1 ]
        , rotateX: [ '180deg', 0 ]
        , delay  : anime.stagger(100)
      }).add({
			targets     : '.designation .second'
			, opacity   : [ 0, 1 ]
			, translateX: [ -250, 0 ]
			, delay     : anime.stagger(100)
			, easing    : 'easeOutElastic(1, .6)'
		}).add({
			targets     : '.designation .second, .designation .first'
			, opacity   : [ 1, 0 ]
			, translateX: [ 0, 250 ]
			, easing    : 'easeOutElastic(1, .6)'
		}).add({
			targets  : '.designation .finalDesignation'
			, opacity: [ 0, 1 ]
			, rotateX: [ '45deg', 0 ]
		}).add({
			targets  : '.designation .finalDesignation, .myself'
			, opacity: [ 1, 0 ]
		}).add({
			targets  : '.introSectionInner'
			, opacity: [ 0, 1 ]
			, scale  : [ 0, 1 ]
		}).add({
			targets   : '.introSectionInner'
			, scale   : [ 1, 9 ]
			, opacity : [ 1, 0 ]
			, duration: 1200
			, easing  : 'linear'
		})

    const trigger = '.wrapper'
      , pin = document.querySelector('.introSection')

    let lastPos = 0
      , interval = null
      , ticker = 4

    let scene1 = new window.ScrollMagic.Scene({
      triggerElement: trigger
      , triggerHook : 0
      , duration    : 7600
      , reverse     : true
    }).addTo(controller)
      .setPin(pin)
      // .setTween(tween)
      .addIndicators()
      .on('update', e => {
        if ( e.scrollPos >= timeline.duration ) {
          return
        }

        // timeline.seek(e.scrollPos)
        // const isForward = e.scrollPos >= lastPos
        softWrap(e)
        lastPos = e.scrollPos
      })


    const softWrap = (e) => {

      timeline.seek(window.scrollY * timeline.duration / e.endPos)

      console.log(window.scrollY)
      // const reset = () => {
      //   clearInterval(interval)
      //   interval = null
      //   ticker = 4
      // }
      //
      // interval = interval || setInterval(() => {
      //   if (lastPos <= 30) {
      //     console.log('reset')
      //     timeline.seek( 0 )
      //     reset()
      //     return
      //   }
      //
      //   console.log(`%c ticker: ${ticker}| lastPos: ${lastPos}| scrollPos: ${scrollPos}`, 'color: #0a0a0a')
      //
      //   timeline.seek( timeline.currentTime + ticker * (forward ? lastPos/100 : -(lastPos/100)) )
      //   --ticker
      //
      //   if (ticker === -1) {
      //     reset()
      //   }
      // }, 0)
    }

    window.anime = anime
  }, [])

  return (
    <section className='introSection' ref={ref}>
      <div className="introCinematic">
        <h1 className="myself">I'm</h1>
        <h1 className="name">
          <div><span>A</span>
            <span>n</span>
            <span>u</span>
            <span>d</span>
            <span>e</span>
            <span>e</span>
            <span>p</span></div>
          <div><span>C</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span>r</span>
            <span>a</span></div>
          <div>
            <span>P</span>
            <span>a</span>
            <span>u</span>
            <span>l</span></div>
        </h1>
        <h1 className="designation">
          <ul>
            <li className="listAnimated first">
              <span>F</span>
              <span>r</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span> </span>
              <span>E</span>
              <span>n</span>
              <span>d</span>
            </li>
            <li className="listAnimated second">Back End</li>
            <li className="finalDesignation">Full Stack</li>
          </ul>
          <div className="finalDesignation">Web Dev</div>
        </h1>
      </div>
      <div className='introSectionInner'>
        <article className='picArticle'/>
        <article className='bioArticle'>
          <hr style={{ width: ' 25rem', margin: 0 }}/>
          <h2 style={{ fontSize: '1.6rem' }}>{props.header}</h2>
          <h3>{props.tagline}</h3>
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
        </article>
      </div>
    </section>
  )
})

Intro.propTypes = {
  header       : PropTypes.string
  , tagline    : PropTypes.string
  , description: PropTypes.string
}

export default Intro
