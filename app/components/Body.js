import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CompoImage from './CompoImage';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../images/AhsokaTano.jpg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../images/darth.jpg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../images/express-mandalorian.jpg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../images/Ezra-Bridger.jpg')} />
        </View>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../images/Kanan_Jarrus_Full.jpg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../images/the-child-img.jpg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    backgroundColor: '#0984e3',
    borderRadius: 15,
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  full: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});