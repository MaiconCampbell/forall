import React, { Component } from 'react';
import { View, Text, Picker, Image, StatusBar } from 'react-native';

const Logo = require('~/assets/img/LogoHorizontal.png');

import { Container, Form, FormInput, SubmitButton, Txt } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function CadLocal() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <Image source={Logo} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>

      <ScrollView style={{ width: '90%' }}>
        <Form style={{ flex: 1 }}>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Fantasia"
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Hora Abertura"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Hora Fechamento"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Telefone"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Logradouro"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Número"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Bairro"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Município"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Estado"
          />

          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CEP"
          />
          <SubmitButton onPress={() => {}}>
            <Txt>Cadastrar Local</Txt>
          </SubmitButton>
        </Form>
      </ScrollView>
    </Container>
  );
}
