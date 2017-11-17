const path = require('path')

const root = __dirname
const src = path.join(root, 'src')
const docs = path.join(src, 'docs')

module.exports = {
  root,
  src,
  docs,
  examples: path.join(src, 'examples'),
  components: path.join(src, 'components'),
  output: path.join(docs, 'componentData.js')
}
