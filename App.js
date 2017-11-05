import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
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
  },
  content: {
    flex: 1,
  },
});
