import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import MyForm from './MyForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./images/favicon.png')}
          />
          <Text style={styles.title}>A Simple Login App</Text>
        </View>
        <View style={styles.myForm}>
          <MyForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aced',
    width: Dimensions.get('window').width,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
  myForm: {
    flex: 3,
    alignItems: 'center',
  },
});