// external imports
import React from 'react'
// local imports
import { ComponentPage, Navigation } from '..'
import componentData from '../componentData'
import styles from './styles'
// css for highlight.js
// import '../../../node_modules/highlight.js/styles/ocean.css'

export default class Docs extends React.Component {
  state = {
    route: window.location.hash.substr(1)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  render() {
    const { route } = this.state

    const Component = route ? componentData.filter(component => component.name === route)[0] : componentData[0]

    return (
      <div style={styles.container}>
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={Component} />
      </div>
    )
  }
}
