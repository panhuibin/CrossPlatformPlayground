import { Dimensions } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'

const LogoSize = Dimensions.get('window').width / 2

export default ExtStyle.create({
  $minContainerSize: LogoSize / 2,
  $minImageSize: LogoSize / 4,
  $maxContainerSize: LogoSize,
  $maxImageSize: LogoSize / 2,
  
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$maxContainerSize',
    height: '$maxContainerSize',
  },
  logo: {
    width: '$maxImageSize',
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
})
