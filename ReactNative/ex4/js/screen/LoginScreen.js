import React, {Component} from 'react'
import {View, Image, Button, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native'
import {TRY_LOGIN, tryLogin} from "../redux/actionSession";
import {connect} from 'react-redux'
import RefreshFooter from '../component/refresh_list/RefreshFooter';
import RefreshState from '../component/refresh_list/RefreshState';

export class LoginScreen extends Component {
    state = {
        animValue: new Animated.Value(0),
    }

    static defaultProps = {
        isNeedArrow: true,
    }

    componentDidMount() {
        // 有enter animation, 所以一进来就可以开始动画了
        Animated.timing(
            this.state.animValue,
            {toValue: 3000, duration: 3000})
            .start()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(`componentWillReceiveProps(${JSON.stringify(nextProps)})`)
        // LOG: componentWillReceiveProps({"navigation":{"state":{"routeName":"LoginScreen","key":"id-1543727736791-1"},"actions":{}},"succ":true,"isNeedArrow":true})
        let isLoginSucc = nextProps.succ
        if (isLoginSucc) {
            this.props.navigation.pop()
            this.props.navigation.navigate('ScheduleScreen')
        }
    }

    // return a style object with opacity and transform
    fadeIn = (delay) => {
        const {animValue} = this.state

        // Math.min是说delay值为2700时, 应该不超过3000, 所以要改为3000
        let maxValue = Math.min(delay + 500, 3000)
        return {
            // 所以animValue的值在0到delay之时, opacity全为0, 即不显示出来
            opacity: animValue.interpolate({
                inputRange: [delay, maxValue],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            }),
            // 仍是delay开始transform. [20,0]的outputRange就是从下方升上来
            // 但注意, 这里的transform不再是一个对象, 而是一组
            transform: [{
                translateY: animValue.interpolate({
                    inputRange: [delay, maxValue],
                    outputRange: [20, 0],
                    extrapolate: 'clamp',
                }),
            }],
        }

    }

    render() {
        console.log(`szw LoginScreen render()`)
        return (
            <View style={styles.root}>
                <Image style={styles.pattenDots} source={require('../../assets/pattern-dots.png')}/>
                <Image style={styles.illustrator} source={require('../../assets/illustration.png')}/>
                <Image source={require('../../assets/logo.png')}/>

                <Animated.View style={this.fadeIn(300)}>
                    <Text style={styles.h1}>Facebook Developer Conference</Text>
                </Animated.View>

                <Animated.View style={this.fadeIn(800)}>
                    <Text style={styles.h2}> April 18 + 19, San Jose</Text>
                </Animated.View>

                {this.renderArrow()}

                <Animated.View style={[styles.loginButtonContainer, this.fadeIn(1500)]}>
                    <Text style={styles.text}> Use Facebook to find your friends at F8</Text>
                    <Button title="login" onPress={this.login}/>
                    <TouchableOpacity onPress={this.skipLogin}>
                        <Text style={styles.skipLogin}> SKIP FOR NOW </Text>
                    </TouchableOpacity>
                </Animated.View>
                <RefreshFooter state={RefreshState.Idle}/>
            </View>
        )

    }

    renderArrow() {
        if (this.props.isNeedArrow) {
            return (
                <Animated.View style={this.fadeIn(1100)}>
                    <Image source={require('../../assets/arrow.png')}/>
                </Animated.View>
            )
        } else {
            return null
        }
    }

    login = () => {
        console.log(`click login()`)
        this.props.dispatch(tryLogin())
    }

    skipLogin = () => {
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    pattenDots: {
        height: 200,
    },
    illustrator: {
        height: 200,
        position: 'absolute',
        top: 0,
    },
    h1: {
        fontSize: 23,
        marginTop: 30,
    },
    h2: {
        fontSize: 20,
        marginTop: 15,
    },
    loginButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
    },
    skipLogin: {
        fontSize: 16,
        color: 'rgba(1, 23, 65, 1)',
    },
})

const mapStateToProps = (state) => {
    console.log(`szw mapStateToProps: ${JSON.stringify(state)}`)
    return {
        succ: state.reduceSession.succ
    }
}

export default connect(mapStateToProps)(LoginScreen)