// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  /** Fade in duration (in milliseconds) */
  duration: number,
  /** Child elements */
  children: any,
  /** Style object */
  style?: {}
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeIn = styled.div`
  animation-name: ${fadeIn};
  animation-duration: ${props => props.duration}ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`

/**
 * A div with fade in on mount.
 */
const FadeInView = ({ children, duration, style }: Props) => (
  <FadeIn style={style} duration={duration}>
    {children}
  </FadeIn>
)

FadeInView.defaultProps = {
  duration: 350
}

export default FadeInView
