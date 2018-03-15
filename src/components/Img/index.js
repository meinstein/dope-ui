// @flow
// external imports
import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  /** The img src */
  src: string,
  /** Any style to mix in */
  style?: {}
}

type State = {
  isLoading: boolean,
  src: string
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeInImg = styled.img`
  animation-name: ${props => (props.isLoading ? 'none' : fadeIn)};
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
`

/**
 * An image tag that fades in.
 */
class Img extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isLoading: true,
      src: props.src
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const currentSrc = this.state.src
    const nextSrc = nextProps.src

    if (currentSrc && nextSrc && currentSrc !== nextSrc) {
      this.setState({ src: nextSrc, isLoading: true })
    }
  }

  render = () => (
    <FadeInImg
      isLoading={this.state.isLoading}
      alt="img"
      src={this.state.src}
      onLoad={() => this.setState({ isLoading: false })}
      style={{
        display: this.state.isLoading ? 'none' : 'inline-block',
        maxWidth: '100%',
        maxHeight: '100%',
        ...this.props.style
      }}
    />
  )
}

export default Img
