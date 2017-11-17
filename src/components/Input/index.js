import React from 'react'
import PropTypes from 'prop-types'

/** This is a basic input component. */
export default class Input extends React.Component {
  static propTypes = {
    /** This is a prop. */
    foo: PropTypes.string
  }

  render() {
    return <input />
  }
}
