// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  /** The img src */
  style?: {},
  children: any
}

// keyframes returns a unique name based on a hash of the contents of the keyframes
const bgPosition = keyframes`
  0% {
    background-position: 50% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 50% 50%;
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
const AnimateBg = styled.div`
  background: linear-gradient(135deg, white, lightgrey);
  background-size: 200% 200%;
  animation: ${bgPosition} 1000ms ease-in-out infinite;
  width: 100%;
  height: 100%;
`
/**
 * A div with an animating gradient for use as a placeholder.
 */
const Placeholder = ({ style, children }: Props) => <AnimateBg style={style}>{children}</AnimateBg>

export default Placeholder
