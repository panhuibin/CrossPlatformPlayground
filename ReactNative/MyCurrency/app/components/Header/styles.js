import ExtStyle from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'

export default ExtStyle.create({
  container: {
    // 若不加Position, 就会因为<Container>组件会将内容全居中, 就不是在最上了. 我们希望Header在最上, 只在statusBar之下
    position: 'absolute',
    right: 0,
    top: 0,
    // 光加上面的几句, header就会和StatusBar重合. 所以这里要加上marginTop
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 9
  },
  icon: {
    // 因为resizeMode="contain", 那自然图片宽高比是维持了的, 所以只设置一个width就行了. 不设置height也没事
    width: 24
  },
})
