// external imports
import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
// internal imports
import styles from './styles'

// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight'

class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightBlock(this.element)
  }

  render = () => (
    <pre ref={ref => (this.element = ref)} style={styles.pre}>
      <code>{this.props.children}</code>
    </pre>
  )
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample
