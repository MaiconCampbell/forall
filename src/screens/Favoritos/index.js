import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Logo = require('~/assets/img/LogoH.png');

export default class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <View style={styles.containerLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.containerFavoritos}>
          <ScrollView>
            <View style={styles.imgFavoritos}></View>
            <View style={styles.dadosFavoritos}></View>

            <View style={styles.imgFavoritos}></View>
            <View style={styles.dadosFavoritos}></View>

            <View style={styles.imgFavoritos}></View>
            <View style={styles.dadosFavoritos}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',

    paddingHorizontal: 10,
  },
  containerLogo: {
    flex: 1,
    height: 100,
  },
  logo: {
    height: '75%',
    height: '70%',
    resizeMode: 'center',
  },
  containerFavoritos: {
    flex: 3,
    height: '100%',
    width: '100%',
    marginTop: -55,

    backgroundColor: '#eee',
  },
  imgFavoritos: {
    height: 300,
    width: '95%',
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#AAA',
  },
  dadosFavoritos: {
    height: 200,
    width: '95%',
    marginHorizontal: 10,

    backgroundColor: '#00f',
  },
});
