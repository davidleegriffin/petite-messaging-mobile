import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import HeroText from './HeroText';

export default class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        style={styles.hero}
        source={require('../images/StarWarsLogo.png')}
      >
        <HeroText /> 
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: '96%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  },
});