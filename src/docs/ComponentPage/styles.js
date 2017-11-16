import { fonts } from '../styles'

export default {
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: 1000,
    minWidth: 500,
    padding: 40,
  },
  h2: {
    fontSize: 28,
    ...fonts.heavy
  },
  h3: {
    fontSize: 20,
    padding: '16px 0',
    ...fonts.heavy
  }
}
