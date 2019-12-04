import React, { Component } from 'react';
import { View, Text, Picker, Image, StatusBar } from 'react-native';

const Logo = require('~/assets/img/LogoHorizontal.png');

import { Container, Form, FormInput, SubmitButton, Txt } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function DadUsuario() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />
      <View style={{ flex: 3, }}>
        <Image source={Logo} style={{ flex: 1, resizeMode: 'contain' }} />
      </View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>
        Dados do usuário:
      </Text>
      <ScrollView style={{ width: '90%' }}>
        <Form style={{ flex: 1 }}>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="date-range"
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
            placeholder="e-mail"
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
            <Txt>Salvar</Txt>
          </SubmitButton>
        </Form>
      </ScrollView>
    </Container>
  );
}
