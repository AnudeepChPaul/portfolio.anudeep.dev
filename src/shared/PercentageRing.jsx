import React from 'react'
import * as PropTypes from 'prop-types'
import './PercentageRing.scss'


export const PercentageRing = (props) => {
  const {radius, stroke, progress} = props
    , normalizedRadius = radius - stroke * 2
    , circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
      className='percentageRing'
      height={radius * 2}
      width={radius * 2}
      style={{position: 'absolute'}}
    >
      <circle
        stroke="inherit"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{strokeDashoffset}}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
};

PercentageRing.propTypes = {
  radius: PropTypes.number
  , stroke: PropTypes.number
  , progress: PropTypes.number
};