// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Navigation = ({ components }) => (
  <ul style={styles.container}>
    {components.map(name => (
      <li style={styles.li} key={name}>
        <a href={`#${name}`}>{name}</a>
      </li>
    ))}
  </ul>
)

Navigation.propTypes = {
  components: PropTypes.array.isRequired
}

export default Navigation
