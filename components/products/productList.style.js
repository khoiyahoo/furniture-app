import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxLarge + 12,
    paddingLeft: SIZES.small - 50,
    paddingRight: SIZES.small - 50,
  },
  separator: {
    height: 16,
  },
})

export default styles
