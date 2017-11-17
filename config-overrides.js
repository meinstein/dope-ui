const paths = require('./project-paths')

module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      docs: paths.docs,
      'dope-ui': paths.components
    }
  }

  return config
}
