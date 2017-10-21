import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./logo-100.png')} style={styles.logo}/>
        <View style={styles.content}>
          <RootNavigation />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: 15,
  },
  logo: {
    width: 100, 
    height: 47,
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
    flex: -1,
  },
  content: {
    flex: 1,
  },
});
