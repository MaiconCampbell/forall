import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';
import { Rating, AirbnbRating } from 'react-native-ratings';

// importações para mapa e rota
import MapView from 'react-native-maps';
import Pesquisa from '../Pesquisa';

export default class Mapa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null,
      destination: null,
      lugares: [],
      lat: 0,
      lng: 0,
      locais: [
        {
          id: 1,
          titulo: 'Você está aqui',
          descricao: 'sua localização atual',
          latitude: -22.46443937,
          longitude: -44.44978774,
        },
      ],
    };
  } //End constructor

  _selecionar(local) {
    this.props.navigation.navigate('Local', {
      identificacao: local.id,
      nomeLocal: local.nomeFantasia,
      imageUrl: local.imageUrl,
      categoria: local.categoria,
      telefone: local.telReserva,
      endereco: local.endereco,
      avaliacao: local.avaliacao,
    });
  }

  _mapReady = () => {
    this.state.locais[0].mark.showCallout();
  };

  componentWillMount() {
    let arrayLocais = [];
    const locaiRef = firebase.database().ref('locais');
    locaiRef.once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        arrayLocais.push(childSnapshot.val());
      });

      this.setState({ locais: arrayLocais });
    });
  }

  render() {
    let { latitude, longitude } = this.state.locais[0];

    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.mapView = map)}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034,
          }}
          style={styles.mapview}
          showsUserLocation
          loadingEnabled
          showsPointsOfInterest={false}
          showsBuildings={false}
          onMapReady={this._mapReady}
        >
          {this.state.locais.map((local, index) => (
            <MapView.Marker
              ref={mark => (local.mark = mark)}
              title={local.nomeFantasia}
              description={local.categoria}
              key={index}
              pinColor={'green'}
              coordinate={{
                latitude: local.latitude,
                longitude: local.longitude,
              }}
            />
          ))}
        </MapView>

        <ScrollView
          style={styles.locaisContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const local =
              scrolled > 0 ? scrolled / Dimensions.get('window').width : 0;

            const { latitude, longitude, mark } = this.state.locais[local];

            this.mapView.animateToCoordinate(
              {
                latitude,
                longitude,
              },
              1000
            );

            setTimeout(() => {
              mark.showCallout();
            }, 1000);
          }}
        >
          {this.state.locais.map(local => (
            <ScrollView key={local.id} style={styles.local}>
              <Text style={styles.textNome}>{local.nomeFantasia}</Text>
              <View style={styles.linha}></View>
              <View style={{ flex: 1 }}>
                <AirbnbRating
                  style={{ margin: 0 }}
                  defaultRating={local.avaliacao}
                  reviews={[1, 2, 3, 4, 5]}
                  startingValue={5}
                  isDisabled
                />
                <Text style={styles.textCategoria}>
                  Categoria: {local.categoria}
                </Text>
                <Text style={styles.textHora}>Abre ás: {local.horaInicio}</Text>
                <Text style={styles.textHora}>Fecha ás: {local.horaFim}</Text>
                <Text style={styles.textHora}>
                  Telefone: {local.telReserva}
                </Text>
                <Text numberOfLines={2} style={styles.textEndereco}>
                  {local.endereco}
                </Text>
                <TouchableOpacity
                  style={styles.buttonSelecionar}
                  onPress={() => {
                    this._selecionar(local);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>Selecionar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ))}
        </ScrollView>

        {/* <Pesquisa onLocationSelected={this.handleLocationSelect} /> */}
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  mapview: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  locaisContainer: {
    width: '100%',
    maxHeight: 250,
  },

  local: {
    width: width - 40,
    maxHeight: 300,
    backgroundColor: '#37752C',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
  },

  textNome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    alignSelf: 'center',
  },

  textCategoria: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  },

  textEndereco: {
    fontSize: 20,
    color: '#fff',
  },
  textHora: {
    fontSize: 20,
    color: '#fff',
  },

  buttonSelecionar: {
    paddingLeft: 5,
    height: 45,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
