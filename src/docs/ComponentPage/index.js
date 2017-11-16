// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { Example, Props } from '..'
import styles from './styles'

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component

  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <h2 style={styles.h2}>{name}</h2>
        <p>{description}</p>

        <h3 style={styles.h3}>Example{examples.length > 1 && 's'}</h3>
        {examples.length > 0
          ? examples.map(example => <Example key={example.name} example={example} componentName={name} />)
          : 'No examples exist.'}
        <h3 style={styles.h3}>Props</h3>
        {props ? <Props props={props} /> : 'This component accepts no props.'}
      </div>
    </div>
  )
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
}

export default ComponentPage
