import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          style={styles.input} 
        />
          <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry='true'
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    // padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'rgba(250,250,50,1)',
    paddingVertical: 15,
    width: 100,
    marginLeft: 25,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
});