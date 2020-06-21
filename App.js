import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import Button from './src/components/Button';
import Display from './src/components/Display';
import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const customDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: '#fff'}} />
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    contentComponent: customDrawerComponent,
  },
);
