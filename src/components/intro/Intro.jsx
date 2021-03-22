// import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import './Intro.scss'
import PropTypes from 'prop-types'


const Intro = React.forwardRef((props, ref) => {
  /** useEffect(() => {
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
  }, []) **/

  React.useEffect(() => {
    if ( typeof window === 'undefined' ) {
      return
    }

    const query = document.querySelector('.introPosterBackground').children
    const name = document.querySelector('.name')

    window.onmousemove = e => {
      const x = (window.innerWidth / 2 - e.pageX) / 25
      const y = (window.innerHeight / 2 - e.pageY) / 25

      let index = 1
      for (let child of query) {
        child.style.transform = `translate3d(${x}px, ${y}px, 0)`
        ++index
      }
      index = 1

      // name.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }, [])

  return (
    <section className='introSection' ref={ref}>
      <div className="introCinematic">
        <h1 className="name">
          <div>ANUDEEP</div>
          <div>CHANDRA</div>
          <div>PAUL</div>
        </h1>
        <hr/>
        <h6 className="designation">{props.tagline.split('|').map(line => (
          <div key={line}>{line}</div>
        ))}</h6>
      </div>
      <div className="introPoster">
        <div className="introPosterBackground">
          <div className="lightSource"></div>
          <div className="lightSourceEffect1"></div>
          <div className="lightSourceEffect2"></div>
          <div className="lightSourceEffect3"></div>
          <div className="lightSourceEffect4"></div>
          <div className="lightSourceEffect5"></div>
        </div>
        <div className="introPosterDrawings"></div>
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
