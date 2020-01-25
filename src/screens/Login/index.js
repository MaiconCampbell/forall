import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';

import Icon from 'react-native-vector-icons/FontAwesome';

const Logo = require('~/assets/img/Logo.png');

export default class Login extends Component {
  // metodo assionado toda vez que o componente é renderizado
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      loading: false,
      msg: '',
    };

    // criando as referencias de navegação entre componentes
    this.state.email = React.createRef();
    this.state.senha = React.createRef();

    // realizamos o bind para amarrar a chamado ao escopo
    this.entrar = this.entrar.bind(this);
    this.criarConta = this.criarConta.bind(this);
    this.esqueciSenha = this.esqueciSenha.bind(this);
  }

  MsgErroTratada(codErro) {
    switch (codErro) {
      case 'auth/invalid-email':
        return 'E-mail invalido, verifique';
      case 'auth/wrong-password':
        return 'Senha incorreta, verifique';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default: {
        return codErro;
      }
    }
  }

  entrar() {
    this.setState({ loading: true, msg: '' });
    const { email, senha } = this.state;

    if (email.current === null) {
      this.setState({
        loading: false,
        msg: 'e-mail deve ser preenchido',
      });
    } else if (senha.length === undefined) {
      this.setState({
        loading: false,
        msg: 'senha deve ser preenchido',
      });
    } else {
      Keyboard.dismiss();

      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(user => {
          this.setState({ loading: true, msg: '' });
          return this.props.navigation.replace('Main');
        })
        .catch(error => {
          this.setState({
            loading: false,
            msg: this.MsgErroTratada(error.code),
          });
        });
    }
  }

  criarConta() {
    this.props.navigation.navigate('CadastroUsuario');
  }

  esqueciSenha() {
    this.props.navigation.navigate('RecuperarSenha');
  }

  // field => campo
  // value => valor contido no campo
  // recebe o campo e valor, assim pode ser utilizado em qualquer atualizacao do state
  AlterarCampo(field, value) {
    this.setState({
      [field]: value,
    });
  }

  RenderizaMsg() {
    const { msg } = this.state;

    if (!msg) {
      return null;
    }

    return (
      <View>
        <Text>{msg}</Text>
      </View>
    );
  }

  RenderizaBtn() {
    if (this.state.loading) {
      return (
        <ActivityIndicator
          size="large"
          color="#37752C"
          style={styles.indicador}
        />
      );
    }
    return (
      <TouchableOpacity
        style={[styles.btn, styles.corBtnEntrar]}
        onPress={() => this.entrar()}
      >
        <Text style={styles.txtBtn}>Entrar</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let { email, senha } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <Image source={Logo} style={styles.logo} />

        <TextInput
          placeholder="e-mail"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => senha.current.focus()}
          onChangeText={value => this.AlterarCampo('email', value)}
        />

        <TextInput
          placeholder="senha"
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          ref={senha}
          returnKeyType="send"
          onSubmitEditing={() => this.entrar()}
          onChangeText={value => this.AlterarCampo('senha', value)}
        />

        {this.RenderizaMsg()}

        {this.RenderizaBtn()}

        {/* txt link: Esqueceu senha */}
        <View style={styles.containerLink}>
          <TouchableOpacity onPress={this.esqueciSenha}>
            <Text style={[styles.Txtlink]}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* linha de borda  */}
        <View style={styles.LinhaBorda} />

        {/* Btn: Gmail */}
        <TouchableOpacity
          style={[styles.btn, styles.corBtnGmail]}
          onPress={() => {}}
        >
          <View style={styles.containerRedesSociais}>
            <Icon name="google" size={32} color="#FFF" style={styles.icones} />
            <Text style={styles.txtBtn}> mail</Text>
          </View>
        </TouchableOpacity>

        {/* Btn: Facebook */}
        <TouchableOpacity
          style={[styles.btn, styles.corBtnFace]}
          onPress={() => {}}
        >
          <View style={styles.containerRedesSociais}>
            <Icon
              name="facebook"
              size={32}
              color="#FFF"
              style={styles.icones}
            />
            <Text style={styles.txtBtn}> acebook</Text>
          </View>
        </TouchableOpacity>

        {/* txt link: Criar nova conta*/}
        <View style={styles.containerLink}>
          <Text style={styles.TxtCriarConta}>Não tenho Conta: </Text>
          <TouchableOpacity onPress={this.criarConta}>
            <Text style={[styles.Txtlink]}>Criar nova conta</Text>
          </TouchableOpacity>
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
  logo: {
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  input: {
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    height: null,
    width: '95%',
  },
  btn: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
  },
  corBtnEntrar: {
    backgroundColor: '#37752C',
  },
  corBtnGmail: {
    backgroundColor: '#D54337',
  },
  corBtnFace: {
    backgroundColor: '#3B5998',
  },
  containerLink: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'flex-end',
  },
  Txtlink: {
    color: '#1A73E8',
    fontSize: 20,
  },
  LinhaBorda: {
    height: 1,
    width: '95%',
    marginTop: 10,
    backgroundColor: '#37752C',
  },
  containerRedesSociais: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  icones: {
    alignSelf: 'center',
    paddingTop: 5,
  },
  TxtCriarConta: {
    fontSize: 20,
  },
});
