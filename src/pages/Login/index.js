import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import firebase from 'firebase';

const Logo = require('~/assets/img/Logo.png');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      confirmarSenha: '',
      exibeSenha: false,
    };

    // realizamos o bind para informar que amar o escopo
    this.mostraSenha = this.mostraSenha.bind(this);
    this.entrar = this.entrar.bind(this);
    this.criarConta = this.criarConta.bind(this);
    this.esqueciSenha = this.esqueciSenha.bind(this);
  }

  // exibe ou esconde a senha
  mostraSenha() {
    this.setState({ exibeSenha: !this.state.exibeSenha });
    if (this.state.exibeSenha) {
      // exibe a senha
    } else {
      // esconde a senha
    }
  }

  entrar() {
    this.props.navigation.navigate('Main');
  }

  criarConta() {
    this.props.navigation.navigate('CadUsuario');
  }

  esqueciSenha() {
    this.props.navigation.navigate('RecSenha');
  }

  render() {
    let { email, senha } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />
        {/* Imagem: logo */}
        <Image source={Logo} style={styles.logo} />
        {/* Campo de Txt: email */}
        <TextInput
          style={styles.inputStyles}
          placeholder="e-mail"
          placeholderTextColor="#AAA"
          value={email}
          underlineColorAndroid="transparent"
          onChangeText={email => {
            this.setState({ email: email });
          }}
        />
        {/* Campo de Txt: senha */}
        <View style={styles.areaSenha}>
          <TextInput
            style={styles.TxtSenha}
            placeholder="senha"
            placeholderTextColor="#AAA"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            value={senha}
            onChangeText={senha => {
              this.setState({ senha });
            }}
          />
          {/* <TouchableOpacity onPress={this.mostraSenha}>
            <Icon
              name={this.state.exibeSenha ? 'eye' : 'eye-slash'}
              size={20}
              color="#DDD"
            />
          </TouchableOpacity> */}
        </View>
        {/* Btn: entrar */}
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#37752C' }]}
          onPress={this.entrar}
        >
          <Text style={styles.txtBtn}>Entrar</Text>
        </TouchableOpacity>
        {/* Recuperar Senha */}
        <View style={styles.containercriarconta}>
          <TouchableOpacity onPress={this.esqueciSenha}>
            <Text style={[styles.link]}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        {/* Linha de borda */}
        <View style={styles.LinhaBorda} />
        <View style={styles.areaRedes}>
          {/* Btn: Gmail */}
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#D54337' }]}
            onPress={() => {}}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon name="google" size={32} color="#FFF" style={styles.Icone} />
              <Text style={styles.txtBtn}>Gmail</Text>
            </View>
          </TouchableOpacity>
          {/* Btn: Facebook */}
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#3B5998' }]}
            onPress={() => {}}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon
                name="facebook"
                size={32}
                color="#FFF"
                style={styles.Icone}
              />
              <Text style={styles.txtBtn}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containercriarconta}>
          <Text style={styles.Txt}>Não tenho Conta: </Text>
          <TouchableOpacity onPress={this.criarConta}>
            <Text style={[styles.link]}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '40%',
    marginTop: 5,
    resizeMode: 'contain',
  },
  inputStyles: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    width: '90%',
    height: 50,
    marginTop: -10,
    margin: 5,
    borderColor: '#CCC',
    borderBottomWidth: 1,
  },
  Txt: {
    fontSize: 20,
  },
  TxtSenha: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    width: '90%',
    height: 50,
    marginTop: 10,
    margin: 5,
  },
  areaSenha: {
    flexDirection: 'row',
    borderColor: '#CCC',
    borderBottomWidth: 1,
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinhaBorda: {
    //flex: 1,
    height: 1,
    width: '90%',
    marginTop: 10,
    marginLeft: '5%',
    backgroundColor: '#37752C',
  },
  btn: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    borderBottomColor: '#000',
  },
  areaRedes: {
    width: '100%',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  Icone: {
    padding: 5,
  },
  containercriarconta: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  link: {
    color: '#1A73E8',
    fontSize: 20,
  },
});
