// @flow
import React from 'react'
import styles from './styles'
import './styles.css'

const ImgPlaceholder = () => <div className="dope-ui-img-placeholder" />

type Props = {
  /** The img src */
  src: string,
  /** A click handler for img */
  onClick: () => void,
  /** Any style to mix in */
  style?: {}
}

type State = {
  error: boolean,
  loading: boolean,
  src: string
}

class Img extends React.Component<Props, State> {
  static defaultProps = {
    onClick: () => ({})
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      error: false,
      loading: true,
      src: props.src
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const currentSrc = this.state.src
    const nextSrc = nextProps.src

    if (currentSrc && nextSrc && currentSrc !== nextSrc) {
      this.setState({ src: nextSrc, loading: true, error: false })
    }
  }

  render = () => (
    <div style={{ ...styles.container, ...this.props.style }} onClick={this.props.onClick}>
      {!this.state.error && (
        <img
          className={!this.state.loading ? 'dope-ui-fade-in' : ''}
          src={this.state.src}
          onLoad={() => this.setState({ loading: false })}
          onError={() => this.setState({ loading: false, error: true })}
          alt="img"
          style={{
            display: this.state.loading ? 'none' : 'inline-block',
            ...styles.img
          }}
        />
      )}
      {this.state.loading && <ImgPlaceholder />}
    </div>
  )
}

export default Img
