import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Image
        style={styles.logo}
        source={require('../images/shopping-cart.png') }
        />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: Dimensions.get('window').width,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    fontStyle: 'italic',
  },
});