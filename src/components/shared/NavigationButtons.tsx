import anime from 'animejs/lib/anime.es.js'
import * as React from 'react'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import './NavigationButtons.css'
import * as PropTypes from 'prop-types'

const BottomButton = styled.button`
`

const animateButtons = () => anime({
  targets: '.animatedBtn'
  , delay: 200
  , easing: 'linear'
  , duration: 750
  , keyframes: [
    {
      opacity: 0.25
      , scale: 1.6
    }
    , {
      opacity: 0.3
      , scale: 1.7
    }
    , {
      opacity: 0.35
      , scale: 1.8
    }
    , {
      opacity: 0.45
      , scale: 1.9
    }
    , {
      opacity: 0.5
      , scale: 2
    }
  ]
})


// markup
const NavigationButtons = (props: any) => {
  useEffect(() => {
    animateButtons()
  })

  const [ isTop, setIsTop ] = useState(true)
  const onButtonClick = (list, index) => {
    props.fn(list)
    setIsTop(!index)
  }
  return (
    <>
      {/*{props.directedList.map((list, index) => (*/}
      {/*  <div key= {index}>*/}
      {/*    {(!isTop && index === 0 ) && <button className="animatedBtn topBtn"*/}
      {/*      onClick={() => onButtonClick(list, index)}>{list.name}</button>}*/}
      {/*    {index !== 0 && <button className="animatedBtn bottomBtn"*/}
      {/*      onClick={() => onButtonClick(list, index)}>{list.name}</button>}*/}
      {/*  </div>*/}
      {/*))}*/}
    </>
  )
}

NavigationButtons.propTypes = {
  directedList: PropTypes.array
}

export default NavigationButtons
