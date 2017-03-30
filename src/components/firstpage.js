/**
 * Created by dantegg on 2017/3/30.
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import SecondPage from './secondpage'

export default class FirstPage extends Component{
    constructor(props){
        super(props)
    }

    _navigate(name,type='Normal'){
        this.props.navigator.push({
            component:SecondPage,
            passProps:{
                name:name
            },
            type:type
        })
    }

    render(){
        return(
            <View>
                <View>
                    <Text>
                        {'第一页'}
                    </Text>
                </View>
                <TouchableOpacity
                onPress={()=>this._navigate('你好！(来源第一页:右出)')}
                >
                    <Text>
                        {'跳转至第二页(右出)'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this._navigate('你好！(来源第一页:底出)','Bottom')}
                >
                    <Text>
                        {'跳转至第二页(底出)'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}