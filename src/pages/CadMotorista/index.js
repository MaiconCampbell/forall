import React, { Component } from 'react';
import { Image, Text, StyleSheet, StatusBar } from 'react-native';

const imgLogo = require('~/assets/img/LogoHorizontal.png');

import {
  Container,
  ContainerLogo,
  Form,
  FormInput,
  SubmitButton,
  Txt,
} from './styles';

export default function CadUsuario() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />

      <ContainerLogo>
        <Image
          source={imgLogo}
          style={{ flex: 1, resizeMode: 'center', marginBottom: 25 }}
        />
      </ContainerLogo>

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome"
        />
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Sobrenome"
        />
        <FormInput
          icon="assignment-ind"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="CPF"
        />
        <FormInput
          icon="assignment-ind"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="CNH"
        />
        <FormInput
          icon="record-voice-over"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Especialidade"
        />
        <FormInput
          icon="phone-android"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Telefone Celular"
        />

        <SubmitButton onPress={() => {}}>
          <Txt>Cadastrar</Txt>
        </SubmitButton>
      </Form>
    </Container>
  );
}

const estilo = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});
