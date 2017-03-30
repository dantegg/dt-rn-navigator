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


export default class SecondPage extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text>
                        第二页:{this.props.name}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={()=>this.props.navigator.pop()}
                >
                    <Text>返回上一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}