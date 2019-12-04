import React, { Component } from 'react';
import { Image, Text, Picker } from 'react-native';

const imgLogo = require('~/assets/img/perfilusuario.png');

import { Container, Form, FormInput, SubmitButton, Txt } from './styles';

export default function DadUsuario() {
  return (
    <Container>
      <Text>Perfil</Text>

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome "
        />

        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Sobrenome"
        />

        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Data Nascimento"
        />

        <Text>Sexo:</Text>
        {/* Campo Seleção: Masculino = M / Feminino = F */}
        <Picker
          prompt="Selecione seu Sexo"
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexo: itemValue })
          }
        >
          <Picker.item label="Masculino" value="Masculino" />
          <Picker.item label="Feminino" value="Feminino" />
        </Picker>

        <FormInput
          icon="mail-outline"
          Keyboard="email-addres"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu email"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Senha atual"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Nova senha"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Confirme sua senha"
        />

        <SubmitButton onPress={() => {}}>
          <Txt>Salvar alterações</Txt>
        </SubmitButton>
      </Form>
    </Container>
  );
}
