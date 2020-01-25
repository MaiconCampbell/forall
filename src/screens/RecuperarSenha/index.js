import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';

const Logo = require('~/assets/img/Logo.png');

export default class RecuperarSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false,
    };

    this.Enviar = this.Enviar.bind(this);
  }

  Enviar() {
    this.setState({ loading: true });

    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        this.setState({ loading: false });

        Alert.alert(
          'Recuperação de senha',
          `Enviado procedimento para o e-mail:
          "${this.state.email}"`
        );
        this.setState({ email: '' });
      })
      .catch(error => {});
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
        onPress={() => this.Enviar()}
      >
        <Text style={styles.txtBtn}>Redefinir senha</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { email } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.Txt}>Informe o e-mail e clique em no botão</Text>
          <Text style={[styles.Txt, styles.TxtDestaque]}>
            Redefinir a senha
          </Text>

          <TextInput
            placeholder="Digite sem e-mail"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            returnKeyType="send"
            onSubmitEditing={() => this.recuperarSenha}
            onChangeText={email => {
              this.setState({ email });
            }}
          />

          {this.RenderizaBtn()}
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImg: {
    marginTop: 20,
    flex: 3,
  },
  logo: {
    flex: 3,
    resizeMode: 'contain',
  },
  containerForm: {
    flex: 5,
    width: width,
    height: '95%',
    marginLeft: '10%',
    marginRight: '5%',
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
    marginRight: '10%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#37752C',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  Txt: {
    fontSize: 20,
  },
  TxtDestaque: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
