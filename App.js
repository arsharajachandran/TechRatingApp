import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CancelledList from './cancelledList';
import * as dbhelper from './dbhelper'
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
   
    };
  }


  render() {
    return (
      <View style={styles.container}>
      
        <View style={{ alignItems: "center", justifyContent: "center", padding: 10, }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CancelledList')}>

            <Text style={{ fontSize: 30 }}>Welcome</Text>
          </TouchableOpacity>
        </View>

   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
