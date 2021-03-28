import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HeroText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.headerText}> Sempai </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 15,
    elevation: 1,
    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: '#55efc4',
    padding: 10,
    fontWeight: 'bold',
  },
});