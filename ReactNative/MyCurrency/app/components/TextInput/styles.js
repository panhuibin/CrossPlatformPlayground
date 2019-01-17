import { StyleSheet } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

export default ExtStyle.create({
  $buttonBgColorBase: '$white',
  $buttonBgColorModifier: 0.1,
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  currencyTouch: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
  },
  currencyText: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    paddingHorizontal: 14,
    color: '$inputText',
    fontSize: 19,
  },
})
