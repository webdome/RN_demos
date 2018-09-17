/**
 * ViewOne
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';


export default class ViewOne extends Component {

    // 构造
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualImmutable(this.props, nextProps)
            || !shallowEqualImmutable(this.state, nextState);
    }

    render() {
        console.log('render in ViewOne');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.content}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});