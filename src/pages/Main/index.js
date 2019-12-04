import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

// importação dos Icones
import Mapa from '~/components/Icon/Mapa';
import Favoritos from '~/components/Icon/Favoritos';
import Usuario from '~/components/Icon/Usuario';
import CadLocal from '~/components/Icon/CadLocal';
import Transporte from '~/components/Icon/Transporte';
import Deslogar from '~/components/Icon/Deslogar';

import { Container, ContainerLogo, Btn, Txt } from './styles';

// importacoes das imagens
import Logo from '~/assets/img/LogoHorizontal.png';

class Main extends Component {
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
    this.props.navigation.navigate('Localizacao');
  }

  Favoritos() {
    this.props.navigation.navigate('Favoritos');
  }

  DadosUsuario() {
    this.props.navigation.navigate('CadMotorista');
  }

  CadatroLocal() {
    this.props.navigation.navigate('CadLocal');
  }

  Transporte() {
    this.props.navigation.navigate('Transporte');
  }

  Deslogar() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />
        <View style={{ flex: 1 }}>
          <Image source={Logo} style={{ flex: 1, resizeMode: 'center' }} />
        </View>
        <View style={{ Flex: 4, flexDirection: 'row' }}>
          <ContainerLogo>
            <Btn onPress={this.Localizacao}>
              <Mapa />
              <Txt>Localização</Txt>
            </Btn>
          </ContainerLogo>
          <ContainerLogo>
            <Btn onPress={this.Favoritos}>
              <Favoritos />
              <Txt>Favoritos</Txt>
            </Btn>
          </ContainerLogo>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ContainerLogo>
            <Btn onPress={this.DadosUsuario}>
              <Usuario />
              <Txt>Dados Usuário</Txt>
            </Btn>
          </ContainerLogo>
          <ContainerLogo>
            <Btn onPress={this.CadatroLocal}>
              <CadLocal />
              <Txt>Cadastrar Local</Txt>
            </Btn>
          </ContainerLogo>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ContainerLogo>
            <Btn onPress={this.Transporte}>
              <Transporte />
              <Txt>Transporte</Txt>
            </Btn>
          </ContainerLogo>
          <ContainerLogo>
            <Btn onPress={this.Deslogar}>
              <Deslogar />
              <Txt>Deslogar</Txt>
            </Btn>
          </ContainerLogo>
        </View>
      </Container>
    );
  }
}

export default Main;
