// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { CodeExample } from '..'
import styles from './styles'

class Example extends React.Component {
  state = { showCode: false }

  componentWillReceiveProps({ componentName: nextComponent }) {
    if (this.props.componentName !== nextComponent) {
      this.setState({ showCode: false })
    }
  }

  toggleCode = evt => {
    evt.preventDefault()
    this.setState(prevState => {
      // eslint-disable-line
      return { showCode: !prevState.showCode }
    })
  }

  render() {
    const { showCode } = this.state
    const { code, description, name } = this.props.example
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`../../examples/${this.props.componentName}/${name}`).default // eslint-disable-line

    return (
      <div style={styles.container}>
        {description && <h4>{description}</h4>}
        <div style={styles.subContainer}>
          <ExampleComponent />
          <i style={styles.icon} onClick={this.toggleCode} className={`fa fa-${showCode ? 'close' : 'code'}`} />
        </div>
        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example
