import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class CompoImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Image
        style={styles.image}
        source={this.props.imageSource}
     />
      
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});