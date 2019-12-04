import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

const Logo = require('~/assets/img/LogoHorizontal.png');

import { Container, Form, FormInput, SubmitButton, Txt } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Transporte() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />
      <View style={{ flex: 3, }}>
        <Image source={Logo} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>
        Transporte:
      </Text>
      <ScrollView style={{ width: '90%' }}>
        <Form style={{ flex: 1 }}>

        <FormInput
          placeholder="Nome: Carlos Alberto"
        />
        <FormInput
          placeholder="Sobrenome: queiroz"
        />

        <FormInput
          placeholder="CPF: 09865742984"
        />

        <FormInput
          placeholder="CNH: 35794612048"
        />

        <FormInput
          placeholder="Especialidade: Portadores de deficiência Motora"
        />
          <SubmitButton onPress={() => {}}>
            <Txt>Solicitar Transporte</Txt>
          </SubmitButton>
        </Form>
      </ScrollView>
    </Container>
  );
}
