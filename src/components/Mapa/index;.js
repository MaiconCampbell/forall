import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// importações para mapa e rota
import MapView from 'react-native-maps';
import Pesquisa from '../Pesquisa';
import Directions from '../Directions';

const Estrela = <Icon name="star" size={50} color="#000" />;

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      destination: null,
      locais: [
        {
          id: 1,
          titulo: 'Restaurante do João',
          descricao: 'Café da manha, almoço e jantar',
          latitude: -22.46603563,
          longitude: -44.45047438,
        },
        {
          id: 2,
          titulo: 'Resende Shopping',
          descricao: 'Lazer e diversão',
          latitude: -22.46650161,
          longitude: -44.4517082,
        },
        {
          id: 3,
          titulo: 'Centro Empresárial',
          descricao: 'As melhores lojas ...',
          latitude: -22.46443937,
          longitude: -44.44978774,
        },
      ],
    };
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }

  handleLocationSelect = (data, { geometry }) => {
    const {
      location: { lat: latitude, log: longitude },
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  render() {
    let { region, destination } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />
        <View style={{ flex: 3 }}>
          <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled
            rotateEnabled={true}
            scrollEnabled={true}
            zoomEnabled={true}
            showsPointsOfInterest={false}
            showsBuildings={false}
          >
            {destination && (
              <Directions
                origin={region}
                destination={destination}
                onReady={() => {}}
              />
            )}
            {this.state.locais.map(item => (
              <MapView.Marker
                pinColor={'green'}
                key={item.id}
                title={item.titulo}
                description={item.descricao}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              />
            ))}
          </MapView>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#7BEA7C',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginLeft: 10,
              textAlign: 'center',
              fontSize: 25,
              padding: 10,
              fontWeight: 'bold',
            }}
          >
            Restaurante do João
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              Funcionamento:
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>06:00 às 20:00</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categoria:</Text>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>
              Restaurante e similares
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Endereço:</Text>
            <Text style={{ marginLeft: 10, fontSize: 20, textAlign: 'center' }}>
              Rua: jardim das flores, Nº 7070, Centro, Resende
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Avaliação:</Text>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>Não avaliado</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}> Avaliar</Text>
          </TouchableOpacity>
        </View>
        <Pesquisa onLocationSelected={this.handleLocationSelect} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    backgroundColor: '#37752C',
    marginTop: 10,
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
});
