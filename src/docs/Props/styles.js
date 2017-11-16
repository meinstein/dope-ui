import { fonts } from '../styles'

export default {
  table: {
    width: '100%',
    textAlign: 'left'
  },
  th: {
    padding: 10,
    borderBottom: '1px solid black',
    ...fonts.heavy
  },
  td: {
    borderBottom: '1px solid black',
    padding: 10,
    ...fonts.light
  }
}
