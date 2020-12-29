import React from 'react';
import {Image} from 'react-native'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen,
  navigationOptions : {
    tabBarIcon:<Image source={require('./assets/write.png')} style={{width:40,height:40}} />,
    tabBarLabel:'Write Story'
  }},
  ReadStoryScreen:{screen:ReadStoryScreen ,
    navigationOptions : {
      tabBarIcon:<Image source={require('./assets/read.png')} style={{width:40,height:40}} />,
      tabBarLabel:'Read Story'}
    }
})
const AppContainer = createAppContainer(TabNavigator)
