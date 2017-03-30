/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator
} from 'react-native';
// import NavBar from "antd-mobile/lib/nav-bar/index.web.d";

import FirstPage from './src/components/firstpage'
import SecondPage from './src/components/secondpage'

// import Button from 'antd-mobile/lib/button'

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
         initialRoute={{component:FirstPage}}
         configureScene={this.configureScene.bind(this)}
         renderScene={this.renderScene.bind(this)}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo', () => demo);
