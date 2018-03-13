// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  /** The img src */
  style?: {}
}

// keyframes returns a unique name based on a hash of the contents of the keyframes
const bgPosition = keyframes`
  0% {
    background-position: 49% 0%;
  }
  50% {
    background-position: 52% 100%;
  }
  100% {
    background-position: 49% 0%;
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
const AnimateBg = styled.div`
  background: linear-gradient(135deg, #ffffff, #d3d3d3);
  background-size: 200% 200%;
  animation: ${bgPosition} 1500ms ease-in-out infinite;
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 0 1px 0 rgba(0, 0, 1, 0.1);
`
/**
 * A div with a fading gradient for use as a placeholder.
 */
const Placeholder = ({ style }: Props) => <AnimateBg style={style} />

export default Placeholder
