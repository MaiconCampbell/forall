import React, { Component } from 'react';
import { Image, Text } from 'react-native';

const imgLogo = require('~/assets/img/LogoHorizontal.png');

import {
  Container,
  ContainerLogo,
  Form,
  FormInput,
  SubmitButton,
  Txt,
} from './styles';

export default function RecSenha() {
  return (
    <Container>
      <ContainerLogo>
        <Image
          source={imgLogo}
          style={{
            flex: 1,
            resizeMode: 'center',
            marginTop: 25,
            marginBottom: 25,
          }}
        />
      </ContainerLogo>

      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 8 }}>
        Informe o e-mail e Clique:
      </Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 8 }}>
        Recuperar senha
      </Text>
      <Form style={{ flex: 4 }}>
        <FormInput
          icon="mail-outline"
          Keyboard="email-addres"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <SubmitButton onPress={() => {}}>
          <Txt>Recuperar Senha</Txt>
        </SubmitButton>
      </Form>
    </Container>
  );
}
