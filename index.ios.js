/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
    View,Text,
    TouchableOpacity
} from 'react-native';
// import NavBar from "antd-mobile/lib/nav-bar/index.web.d";

import FirstPage from './src/components/firstpage'
import SecondPage from './src/components/secondpage'

// import Button from 'antd-mobile/lib/button'

var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                  <TouchableOpacity
                      underlayColor='transparent'
                      onPress={() => {if (index > 0) {navigator.pop()}}}>
                    <Text style={styles.leftNavButtonText}>
                      后退
                    </Text>
                  </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View style={styles.navContainer}>
                  <TouchableOpacity
                      onPress={() => route.onPress()}>
                    <Text style={styles.rightNavButtonText}>
                        {route.rightText || '右键'}
                    </Text>
                  </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
              <Text style={styles.title}>
                应用标题
              </Text>
            </View>
        );
    }
};


export default class demo extends Component {

  configureScene(route,routeStack){
    if(route.type=="Bottom"){
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }

  renderScene(route, navigator){
    return <route.component navigator={navigator}  {...route.passProps} />
    // if(route.name == 'FirstPage'){
    //   return <FirstPage navigator={navigator} {...route.passProps} />
    // }else if(route.name == 'SecondPage'){
    //   return <SecondPage navigator={navigator} {...route.passProps} />
    // }
  }

  render() {
    return (
     <Navigator
         style={{flex:1}}
         initialRoute={{component:FirstPage,name:'FirstPage'}}
         configureScene={this.configureScene.bind(this)}
         renderScene={this.renderScene.bind(this)}
         navigationBar={
           <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={NavigationBarRouteMapper} />}

      />
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

AppRegistry.registerComponent('demo', () => demo);
