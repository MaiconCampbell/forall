import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
  Picker,
  Dimensions,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from '~/config/ConexaoFirebase';
import { NavigationActions, StackActions } from 'react-navigation';

const Logo = require('~/assets/img/Logo.png');

//permissão de uso do GPS
export async function request_location_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ReactNativeCode Location Permission',
        message: 'ReactNativeCode precisa da sua localização',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Pemissão concedida!');
    } else {
      console.log('Permissão negada');
    }
  } catch (erro) {
    console.log(erro);
  }
}

export default class Cadastrolocal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeFantasia: '',
      categoria: '',
      telReserva: '',
      endereco: '',
      horaInicio: '18:00:00',
      horaFim: '',
      preview: null,
      image: null,
      telaMapa: false,
      latitude: -9.9668994,
      longitude: -67.8450558,
      coords: false,
      urlImg: '',
      latitudeInit: '',
      longitudeInit: '',
    };

    request_location_runtime_permission();

    // pegando coordenadas atuais
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ latitude, longitude });
      },
      error => {
        alert('deu erro');
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    // criando as referencias de navegação entre componentes
    this.state.nomeFantasia = React.createRef();
    this.state.categoria = React.createRef();
    this.state.telReserva = React.createRef();
    this.state.endereco = React.createRef();
    this.state.horaInicio = React.createRef();
    this.state.horaFim = React.createRef();

    // realizamos o bind para informar que amar o escopo
    this.cadastrar = this.cadastrar.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
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

  cadastrar() {
    const {
      preview,
      nomeFantasia,
      categoria,
      telReserva,
      endereco,
      horaInicio,
      horaFim,
      latitude,
      longitude,
      urlImg,
    } = this.state;

    const locaisRef = firebase
      .database()
      .ref('locais')
      .push({
        imageUrl: urlImg,
        nomeFantasia: nomeFantasia,
        categoria: categoria,
        telReserva: telReserva,
        endereco: endereco,
        horaInicio: horaInicio,
        horaFim: horaFim,
        latitude: latitude,
        longitude: longitude,
      })
      .then(item => {
        alert('Dados adicionado com sucesso!');
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: 'Main',
              }),
            ],
          })
        );
      });
  }

  render() {
    const {
      nomeFantasia,
      categoria,
      telReserva,
      endereco,
      horaInicio,
      horaFim,
      preview,
      image,
      latitude,
      longitude,
      latitudeInit,
      longitudeInit,
      coords,
    } = this.state;

    return (
      <>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />
        {!this.state.telaMapa ? (
          <View style={styles.container}>
            <View style={styles.containerImg}>
              <Image source={Logo} style={styles.logo} />
            </View>

            <View style={styles.containerForm}>
              <ScrollView style={styles.scrollView}>
                <TouchableOpacity
                  onPress={() => this.handleSelectImage()}
                  style={styles.BtnSelecionarIgm}
                >
                  <Icon name="upload" style={styles.icones} />
                  <Text style={styles.selectButtonText}>Carregar Imagem</Text>
                </TouchableOpacity>
                {preview && <Image style={styles.preview} source={preview} />}
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ telaMapa: true });
                  }}
                  style={styles.BtnSelecionarIgm}
                >
                  <Icon name="map-marked" style={styles.icones} />
                  <Text style={styles.selectButtonText}>Localizar no Mapa</Text>
                </TouchableOpacity>
                {coords && (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textCoords}>
                      Latitude:{latitude} Longitude:{longitude}
                    </Text>
                  </View>
                )}
                <TextInput
                  placeholder="Nome fantasia"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="default"
                  autoCorrect={false}
                  autoCapitalize="words"
                  value={nomeFantasia}
                  ref={nomeFantasia}
                  returnKeyType="next"
                  onSubmitEditing={() => categoria.current.focus()}
                  onChangeText={nomeFantasia => {
                    this.setState({ nomeFantasia });
                  }}
                />
                <Text>Categoria:</Text>
                <Picker
                  selectedValue={categoria}
                  style={styles.input}
                  itemStyle={styles.seletor}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ categoria: itemValue })
                  }
                >
                  <Picker.Item
                    label="Restaurantes e similares"
                    value="Masculino"
                  />
                  <Picker.Item label="Compras" value="Compras" />
                  <Picker.Item label="Diversão" value="Diversao" />
                  <Picker.Item label="Hospedagem" value="Hospedagem" />
                  <Picker.Item label="Saúde" value="Saude" />
                  <Picker.Item label="Locais públicos" value="Publicos" />
                  <Picker.Item label="Estudos" value="Estudos" />
                  <Picker.Item label="Outros" value="Outros" />
                </Picker>
                <TextInput
                  placeholder="Telefone para reserva"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="default"
                  autoCorrect={false}
                  autoCapitalize="words"
                  value={telReserva}
                  ref={telReserva}
                  returnKeyType="next"
                  onSubmitEditing={() => endereco.current.focus()}
                  onChangeText={telReserva => {
                    this.setState({ telReserva });
                  }}
                />
                <TextInput
                  placeholder="Endereço"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="default"
                  autoCorrect={false}
                  autoCapitalize="words"
                  value={endereco}
                  ref={endereco}
                  returnKeyType="next"
                  onSubmitEditing={() => horaInicio.current.focus()}
                  onChangeText={endereco => {
                    this.setState({ endereco });
                  }}
                />

                <TextInput
                  placeholder="Hora de Abertura"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCapitalize="words"
                  value={horaInicio}
                  ref={horaInicio}
                  returnKeyType="next"
                  onSubmitEditing={() => horaFim.current.focus()}
                  onChangeText={horaInicio => {
                    this.setState({ horaInicio });
                  }}
                />
                
                <TextInput
                  placeholder="Hora de Fechamento"
                  style={styles.input}
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCapitalize="words"
                  value={horaFim}
                  ref={horaFim}
                  returnKeyType="send"
                  onSubmitEditing={() => {}}
                  onChangeText={horaFim => {
                    this.setState({ horaFim });
                  }}
                />
                <TouchableOpacity style={styles.btn} onPress={this.cadastrar}>
                  <Text style={styles.txtBtn}>Salvar novo Local</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <MapView
              style={styles.mapview}
              region={{
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
              }}
              showsPointsOfInterest={true}
              showsUserLocation
              loadingEnabled
              showsBuildings={false}
              onPress={event =>
                this.setState({
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude,
                })
              }
            >
              <MapView.Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
              />
            </MapView>

            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                this.setState({ telaMapa: false, coords: true });
              }}
            >
              <Text style={styles.txtBtn}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mapview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  textCoords: {
    marginTop: 10,
    textAlign: 'center',
  },
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
  preview: {
    width: width,
    height: 150,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
    resizeMode: 'contain',
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
  btn2: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#37752C',
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
    marginRight: 8,
    fontSize: 20,
  },
});
