import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import firebase from '~/config/conexaoFirebase';

import Background from '~/components/Background';
const imgLogo = require('~/assets/img/ImgLogo.png');

export default class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    /**
     * verifica se existe o usuário logado
     * e faz uma navegação de acordo com o resultado
     */
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Login',
              }),
            ],
          })
        );
      } else {
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Maion',
              }),
            ],
          })
        );
      }
    });
  }

  render() {
    return (
      <Background>
        <StatusBar backgroundColor="#7BEA7C" barStyle="light-content" />
        <View style={estilo.container}>
          <Image source={imgLogo} style={estilo.logo} />
          <ActivityIndicator size="large" color="#7BEA7C" />
        </View>
      </Background>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 350,
    height: '60%',
    marginBottom: 50,
    resizeMode: 'contain',
  },
});
