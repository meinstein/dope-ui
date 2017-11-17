// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { CodeExample } from '..'
import styles from './styles'

class Example extends React.Component {
  componentWillReceiveProps({ componentName: nextComponent }) {
    if (this.props.componentName !== nextComponent) {
      this.setState({ showCode: false })
    }
  }

  render = () => {
    const { code, description, name } = this.props.example
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`../../examples/${this.props.componentName}/${name}`).default // eslint-disable-line

    return (
      <div style={styles.container}>
        {description && <h4>{description}</h4>}
        <div style={styles.component}>
          <ExampleComponent />
        </div>
        <div style={styles.example}>
          <CodeExample>{code}</CodeExample>
        </div>
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example
