import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const Logo = require('~/assets/img/LogoHorizontal.png');

import { Container, Form, FormInput, SubmitButton, Txt } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function DadUsuario() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <Image source={Logo} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>
        Favoritos:
      </Text>
      <ScrollView style={{ width: '90%' }}>
        <Form style={{ flex: 1 }}>
          <FormInput placeholder="Nome Fantasia: Resende Shopping" />

          <FormInput placeholder="Horário Abertura: 10:00" />

          <FormInput placeholder="Horário Fechamento: 22:00" />

          <FormInput placeholder="Telefone: (24) 3354-1501" />

          <FormInput placeholder="Número: 369" />

          <FormInput placeholder="Bairro: Centro" />

          <FormInput placeholder="Município: Resende" />

          <FormInput placeholder="Estado: Rio de Janeiro" />

          <FormInput placeholder="CEP: 27511-300" />
        </Form>
      </ScrollView>
    </Container>
  );
}
