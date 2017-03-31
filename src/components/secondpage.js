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
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>this.props.navigator.pop()}>
                    <Text style={styles.buttonText}>
                        返回上一页, 来源: {this.props.id}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        marginTop: 100,
        flexDirection: 'column'
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#81c04d',
        paddingTop: 12,
        paddingBottom: 10,
    },
    // 导航栏文字
    headText: {
        color: '#ffffff',
        fontSize: 22
    },
    // 按钮
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', // 内容居中显示
        backgroundColor: '#ff1049',
        alignItems: 'center'
    },
    // 按钮文字
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }
});