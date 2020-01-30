import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
  Picker,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';
import DatePicker from 'react-native-datepicker';

const Logo = require('~/assets/img/Logo.png');

export default class CadastroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
      sexo: 'Masculino',
      email: '',
      senha: '',
      confirmarSenha: '',
      loading: false,
      dataNascimento: '',
    };

    this.RecuperaDados();

    // criando as referencias de navegação entre componentes
    this.state.nome = React.createRef();
    this.state.sobreNome = React.createRef();
    this.state.email = React.createRef();
    this.state.senha = React.createRef();
    this.state.confirmarSenha = React.createRef();

    // realizamos o bind para informar que amar o escopo
    this.Cadastrar = this.Cadastrar.bind(this);
  }

  RecuperaDados() {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .once('value', snapshot => {
        const Dados = snapshot.val();
        this.setState({
          nome: Dados.nome,
          sobreNome: Dados.sobreNome,
          sexo: Dados.sexo,
          email: Dados.email,
          dataNascimento: Dados.dataNascimento,
        });
      });
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

  Cadastrar() {
    Keyboard.dismiss();

    this.setState({ loading: true, msg: '' });
    const {
      nome,
      sobreNome,
      dataNascimento,
      sexo,
      email,
      senha,
      confirmarSenha,
    } = this.state;

    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .set({
        nome,
        sobreNome,
        sexo,
        email,
        dataNascimento,
      })
      .then(() => {
        this.setState({ loading: false, msg: '' });
        const { currentUser } = firebase.auth();
        Alert.alert('Sucesso', 'Alterações realizadas com sucesso');

        this.RecuperaDados();
      })
      .catch(() =>
        Alert.alert('Erro ao atualizar dados, entre em contato com o suporte')
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
        onPress={() => this.Cadastrar()}
      >
        <Text style={styles.txtBtn}>Alterar Dados</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      nome,
      sobreNome,
      dataNascimento,
      sexo,
      email,
      senha,
      confirmarSenha,
      show,
      mode,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <View style={styles.containerImg}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.containerForm}>
          <ScrollView style={styles.scrollView}>
            <TextInput
              placeholder="Nome"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={nome}
              ref={nome}
              returnKeyType="next"
              onSubmitEditing={() => sobreNome.current.focus()}
              onChangeText={nome => {
                this.setState({ nome });
              }}
            />

            <TextInput
              placeholder="Sobrenome"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={sobreNome}
              ref={sobreNome}
              returnKeyType="next"
              onSubmitEditing={() => dataNascimento.current.focus()}
              onChangeText={sobreNome => {
                this.setState({ sobreNome });
              }}
            />

            <Text>Data Nascimento:</Text>
            <DatePicker
              style={styles.input}
              date={dataNascimento}
              mode="date"
              display="spinner"
              placeholder="Selecione a data Nascimento"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={dataNascimento => {
                this.setState({ dataNascimento });
              }}
            />

            <Text>Sexo:</Text>
            <Picker
              selectedValue={sexo}
              style={styles.input}
              itemStyle={styles.seletor}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sexo: itemValue })
              }
            >
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>

            <TextInput
              placeholder="E-mail"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              ref={email}
              returnKeyType="next"
              onSubmitEditing={() => senha.current.focus()}
              onChangeText={email => {
                this.setState({ email });
              }}
            />

            <TextInput
              placeholder="Senha"
              style={styles.input}
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={senha}
              ref={senha}
              returnKeyType="next"
              onSubmitEditing={() => confirmarSenha.current.focus()}
              onChangeText={senha => {
                this.setState({ senha });
              }}
            />

            <TextInput
              placeholder="Confirmar senha"
              style={styles.input}
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={confirmarSenha}
              ref={confirmarSenha}
              returnKeyType="send"
              onChangeText={confirmarSenha => {
                this.setState({ confirmarSenha });
              }}
            />

            {this.RenderizaBtn()}
          </ScrollView>
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
    flex: 1,
  },
  containerForm: {
    flex: 5,
  },
  logo: {
    flex: 1,
    resizeMode: 'center',
  },
  scrollView: {
    flex: 6,
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
  seletor: {
    backgroundColor: '#F00',
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
});
