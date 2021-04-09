import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        style={styles.headerBG}
        source={require('../img/BG.jpg')}
      >
        <View style={styles.headercontainer}>
            <View style={styles.profilepiccontainer}>
                <Image
                    style={styles.mypic}
                    source={require('../img/profilepic.jpg')}
                />
            </View>
            <Text style={styles.name}>Lupus Yonder</Text>
            <Text style={styles.liner}>lorem ipso dominae veritus</Text>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    headerBG: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headercontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profilepiccontainer: {
        height: 180,
        width: 180,
    },
    mypic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
      marginTop: 18,
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    liner: {
      color: '#fff',
      marginTop: 5,
      fontSize: 15,
      fontStyle: 'italic',
    },
});
