module.exports = [{"name":"Img","description":"","props":{"src":{"flowType":{"name":"string"},"required":true,"description":"The img src"},"onClick":{"flowType":{"name":"signature","type":"function","raw":"() => void","signature":{"arguments":[],"return":{"name":"void"}}},"required":true,"description":"A click handler for img","defaultValue":{"value":"() => ({})","computed":false}},"style":{"flowType":{"name":"signature","type":"object","raw":"{}","signature":{"properties":[]}},"required":false,"description":"Any style to mix in"}},"code":"// @flow\nimport React from 'react'\nimport styles from './styles'\nimport './styles.css'\n\nconst ImgPlaceholder = () => <div className=\"img-placeholder\" />\n\ntype Props = {\n  /** The img src */\n  src: string,\n  /** A click handler for img */\n  onClick: () => void,\n  /** Any style to mix in */\n  style?: {}\n}\n\ntype State = {\n  error: boolean,\n  loading: boolean,\n  src: string\n}\n\nclass Img extends React.Component<Props, State> {\n  static defaultProps = {\n    onClick: () => ({})\n  }\n\n  constructor(props: Props) {\n    super(props)\n\n    this.state = {\n      error: false,\n      loading: true,\n      src: props.src\n    }\n  }\n\n  componentWillReceiveProps(nextProps: Props) {\n    const currentSrc = this.state.src\n    const nextSrc = nextProps.src\n\n    if (currentSrc && nextSrc && currentSrc !== nextSrc) {\n      this.setState({ src: nextSrc, loading: true, error: false })\n    }\n  }\n\n  render = () => (\n    <div style={{ ...styles.container, ...this.props.style }} onClick={this.props.onClick}>\n      {!this.state.error && (\n        <img\n          className={!this.state.loading ? 'fade-in' : ''}\n          src={this.state.src}\n          onLoad={() => this.setState({ loading: false })}\n          onError={() => this.setState({ loading: false, error: true })}\n          alt=\"img\"\n          style={{\n            display: this.state.loading ? 'none' : 'inline-block',\n            ...styles.img\n          }}\n        />\n      )}\n      {this.state.loading && <ImgPlaceholder />}\n    </div>\n  )\n}\n\nexport default Img\n","examples":[{"name":"ExampleOne","description":"","code":"import React from 'react'\nimport { Img } from 'dope-ui'\n\nconst ImgExample = () => <Img src=\"http://thehangarla.com/images/home/black_sofa.jpg\" />\n\nexport default ImgExample\n"}]}]