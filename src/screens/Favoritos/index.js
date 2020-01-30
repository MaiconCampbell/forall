import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';

const Logo = require('~/assets/img/LogoH.png');

export default class Favoritos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lugares: [],
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
  }

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
    return (
      <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />

        <View style={styles.containerLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>

          {this.state.locais.map(local => (
            <View key={local.id} style={styles.containerFavoritos}>
              <Text style={styles.textNome}>{local.nomeFantasia}</Text>
              <View style={styles.linha}></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.txt}>Categoria: {local.categoria}</Text>
                <Text style={styles.txt}>Abre ás: {local.horaInicio}</Text>
                <Text style={styles.txt}>Fecha ás: {local.horaFim}</Text>
                <Text style={styles.txt}>Telefone: {local.telReserva}</Text>
                <Text numberOfLines={2} style={styles.txt}>
                  {local.endereco}
                </Text>
              </View>
            </View>
          ))}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  containerLogo: {
    flex: 1,
    height: 50,
  },
  logo: {
    height: '75%',
    height: '70%',
    resizeMode: 'center',
  },
  textNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    fontSize: 20,
  },
  containerFavoritos: {
    flex: 1,
    height: '95%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: '#CADACD',
    marginTop: 5,
  },
  imgFavoritos: {
    height: 300,
    width: '95%',
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#AAA',
  },
  dadosFavoritos: {
    height: 200,
    width: '95%',
    marginHorizontal: 10,

    backgroundColor: '#00f',
  },
});
