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
import ImagePicker from 'react-native-image-picker';

import firebase from '~/config/ConexaoFirebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Logo = require('~/assets/img/Logo.png');

export default class CadastroTransporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      cnh: '',
      nome: '',
      sobreNome: '',
      email: '',
      especializacao: 'Nenhuma',
      telefone: '',
      regiao: '',
      horarioAtuacao: '',
      loading: false,
    };

    // criando as referencias de navegação entre componentes
    this.state.cpf = React.createRef();
    this.state.cnh = React.createRef();
    this.state.nome = React.createRef();
    this.state.sobreNome = React.createRef();
    this.state.email = React.createRef();
    this.state.especializacao = React.createRef();
    this.state.telefone = React.createRef();
    this.state.regiao = React.createRef();
    this.state.horarioAtuacao = React.createRef();

    // realizamos o bind para informar que amar o escopo
    this.Cadastrar = this.Cadastrar.bind(this);
  }

  // RecuperaDados() {
  //   const { currentUser } = firebase.auth();

  //   firebase
  //     .database()
  //     .ref(`/transporte/${currentUser.uid}`)
  //     .once('value', snapshot => {
  //       const Dados = snapshot.val();

  //       this.setState({
  //         cpf: Dados.cpf,
  //         cnh: Dados.cnh,
  //         nome: Dados.nome,
  //         sobreNome: Dados.sobreNome,
  //         email: Dados.email,
  //         especializacao: Dados.especializacao,
  //         telefone: Dados.telefone,
  //         regiao: Dados.regiao,
  //         horarioAtuacao: Dados.horarioAtuacao,
  //       });
  //     });
  // }

  Cadastrar() {
    Keyboard.dismiss();

    this.setState({ loading: true, msg: '' });
    const {
      cpf,
      cnh,
      nome,
      sobreNome,
      email,
      especializacao,
      telefone,
      regiao,
      horarioAtuacao,
    } = this.state;

    const { currentUser } = firebase.auth();

    const db = firebase.database().ref(`/transporte/${currentUser.uid}`);

    db.set({
      cpf,
      cnh,
      nome,
      sobreNome,
      email,
      especializacao,
      telefone,
      regiao,
      horarioAtuacao,
    })
      .then(() => {
        this.setState({
          cpf: '',
          cnh: '',
          nome: '',
          sobreNome: '',
          email: '',
          especializacao: 'Nenhuma',
          telefone: '',
          regiao: '',
          horarioAtuacao: '',
          loading: false,
        });
        Alert.alert(
          'Sucesso',
          'Cadastro realizado com sucesse, você será adicionado a lista de transporte'
        );
        this.props.navigation.navigate('Transporte');
      })
      .catch(() =>
        Alert.alert('Erro ao inserir dados, entre em contato com o suporte')
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
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
    );
  }

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        takePhotoButtonTitle: 'Tirar Foto',
        cancelButtonTitle: 'Cancelar',
        chooseFromLibraryButtonTitle: 'Selecionar na galeria',
      },
      upload => {
        if (upload.error) {
          alert('Erro ao realizar upload');
        } else if (upload.didCancel) {
          alert('upload cancelado pelo usuário');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          var metadata = {
            contentType: 'image/jpeg',
          };

          const Blob = global.Blob;
          delete global.Blob; // Blob must be undefined (setting it to null won't work)

          let nomeImage = new Date().getTime().toString();
          const imageRef = firebase
            .storage()
            .ref('locais')
            .child(`${nomeImage}.jpg`);
          const test = imageRef
            .putString(preview.uri, 'data_url')
            .then(snapshot => {
              snapshot.ref.getDownloadURL().then(url => {
                this.setState({ urlImg: url });
              });
              global.Blob = Blob;
            });

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          this.setState({ preview, image });
        }
      }
    );
  };

  render() {
    const {
      cpf,
      cnh,
      nome,
      sobreNome,
      email,
      especializacao,
      telefone,
      regiao,
      horarioAtuacao,
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
              placeholder="CPF"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={cpf}
              ref={nome}
              returnKeyType="next"
              onSubmitEditing={() => cnh.current.focus()}
              onChangeText={cpf => {
                this.setState({ cpf });
              }}
            />

            <TextInput
              placeholder="número CNH"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={cnh}
              ref={cnh}
              returnKeyType="next"
              onSubmitEditing={() => nome.current.focus()}
              onChangeText={cnh => {
                this.setState({ cnh });
              }}
            />

            <TouchableOpacity
              onPress={() => this.handleSelectImage()}
              style={styles.BtnSelecionarIgm}
            >
              <Icon name="upload" style={styles.icones} />
              <Text style={styles.selectButtonText}>Carregar Imagem</Text>
            </TouchableOpacity>

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
              onSubmitEditing={() => email.current.focus()}
              onChangeText={sobreNome => {
                this.setState({ sobreNome });
              }}
            />

            <TextInput
              placeholder="e-mail"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              ref={email}
              returnKeyType="next"
              onSubmitEditing={() => telefone.current.focus()}
              onChangeText={email => {
                this.setState({ email });
              }}
            />

            <Text>Especialização:</Text>
            <Picker
              selectedValue={especializacao}
              style={styles.input}
              itemStyle={styles.seletor}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ especializacao: itemValue })
              }
            >
              <Picker.Item label="Nenhuma" value="Nenhuma" />
              <Picker.Item label="Motora" value="Motora" />
              <Picker.Item label="Auditiva" value="Auditiva" />
              <Picker.Item label="Visual" value="Visual" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>

            <TextInput
              placeholder="Telefone"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              autoCorrect={false}
              autoCapitalize="none"
              value={telefone}
              ref={telefone}
              returnKeyType="next"
              onSubmitEditing={() => regiao.current.focus()}
              onChangeText={telefone => {
                this.setState({ telefone });
              }}
            />

            <TextInput
              placeholder="Região de atuação"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={regiao}
              ref={regiao}
              returnKeyType="next"
              onSubmitEditing={() => horarioAtuacao.current.focus()}
              onChangeText={regiao => {
                this.setState({ regiao });
              }}
            />

            <TextInput
              placeholder="Horário disponível"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="words"
              value={horarioAtuacao}
              ref={horarioAtuacao}
              returnKeyType="next"
              onChangeText={horarioAtuacao => {
                this.setState({ horarioAtuacao });
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
  icones: {
    alignSelf: 'center',
    paddingTop: 5,
    marginRight: 8,
    fontSize: 20,
  },
  BtnSelecionarIgm: {
    width: '95%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#37752C',
    borderStyle: 'dashed',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  TxtBtnSelecionarIgm: {
    fontSize: 16,
    color: '#666',
  },
});
