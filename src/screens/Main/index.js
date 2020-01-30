import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';

import Mapa from '~/components/Icon/Mapa';
import Favoritos from '~/components/Icon/Favoritos';
import Usuario from '~/components/Icon/Usuario';
import CadLocal from '~/components/Icon/CadLocal';
import Transporte from '~/components/Icon/Transporte';
import Deslogar from '~/components/Icon/Deslogar';

const Logo = require('~/assets/img/LogoH.png');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.Localizacao = this.Localizacao.bind(this);
    this.Favoritos = this.Favoritos.bind(this);
    this.DadosUsuario = this.DadosUsuario.bind(this);
    this.CadatroLocal = this.CadatroLocal.bind(this);
    this.Transporte = this.Transporte.bind(this);
    this.Deslogar = this.Deslogar.bind(this);
  }

  Localizacao() {
    this.props.navigation.navigate('LocalizacaoMapa');
  }

  Favoritos() {
    this.props.navigation.navigate('Favoritos');
  }

  DadosUsuario() {
    this.props.navigation.navigate('DadosUsuario');
  }

  CadatroLocal() {
    this.props.navigation.navigate('Cadastrolocal');
  }

  Transporte() {
    this.props.navigation.navigate('Transporte');
  }

  Deslogar() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <View style={styles.containerLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.containerNavegacao}>
          {/* Linha: Primeira conjunto de linha */}
          <View style={styles.containerLinha}>
            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.Localizacao} style={styles.btn}>
                <Mapa />
                <Text style={styles.txt}>Locais</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.Favoritos} style={styles.btn}>
                <Favoritos />
                <Text style={styles.txt}>Favoritos</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Linha: Segundo conjunto de linha */}
          <View style={styles.containerLinha}>
            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.DadosUsuario} style={styles.btn}>
                <Usuario />
                <Text style={styles.txt}>Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.CadatroLocal} style={styles.btn}>
                <CadLocal />
                <Text style={styles.txt}>Cadastrar Local</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Linha: Terceira conjunto de linha */}
          <View style={styles.containerLinha}>
            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.Transporte} style={styles.btn}>
                <Transporte />
                <Text style={styles.txt}>Transporte</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerMenu}>
              <TouchableOpacity onPress={this.Deslogar} style={styles.btn}>
                <Deslogar />
                <Text style={styles.txt}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'center',
  },
  containerNavegacao: {
    flex: 4,
    width: '95%',
  },
  containerLinha: {
    flexDirection: 'row',
  },
  containerMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBD8D1',
    height: 165,
    margin: 10,
  },
  btn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    textAlign: 'center',
    color: '#37752C',
  },
});
