import App from './app/index'
export default App

// import React, { Component } from 'react'
// import { View, Text, StatusBar, Button } from 'react-native'
// import Child from './temp'
//
// class Parent extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'child->parent',
//     }
//
//     var names = [{ name: 'Bruce', age: 30 }, { name: 'Clark', age: 32 }]
//
//     var user = {
//       names: [{ name: 'Kate', age: 11 }, { name: 'Jim', age: 12 }],
//       selectOne: function() {
//         let tmp = parseInt(Math.random() * 10)
//         let randomIndex = tmp % 2
//         let person = this.names[randomIndex]
//         console.log(person)
//       },
//     }
//
//     user.selectOne() //结果不是Kate, 就是Jim
//
//     var another = user.selectOne
//     console.log(this.names) //=> undefined
//
//   }
//
//   onChildClick(name) {
//     this.setState({ name: name })
//   }
//
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <StatusBar translucent={false} barStyle="default"/>
//         <Child desp={this.state.name}
//                changeChild={value => this.onChildClick(value)}
//         />
//       </View>
//     )
//   }
// }
//
//
// export default Parent


