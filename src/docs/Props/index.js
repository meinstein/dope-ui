// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { fonts } from '../styles'
import styles from './styles'

const Props = ({ props }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Description</th>
          <th style={styles.th}>Type</th>
          <th style={styles.th}>Default</th>
          <th style={styles.th}>Required</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map(key => (
          <tr key={key}>
            <td style={{ ...styles.td, ...fonts.medium }}>{key}</td>
            <td style={styles.td}>{props[key].description}</td>
            <td style={styles.td}>{props[key].flowType.name}</td>
            <td style={styles.td}>{props[key].defaultValue && props[key].defaultValue.value}</td>
            <td style={styles.td}>{props[key].required && 'X'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
}

export default Props
