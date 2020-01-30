import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import firebase from '~/config/ConexaoFirebase';
import { NavigationActions, StackActions } from 'react-navigation';

export default class Local extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identificacao: '',
      imageUrl: '',
      nomeLocal: '',
      telReserva: '',
      categoria: '',
      endereco: '',
      avaliacao: '',
    };
  }

  componentWillMount() {
    const {
      identificacao,
      nomeLocal,
      imageUrl,
      categoria,
      telefone,
      endereco,
      avaliacao,
    } = this.props.navigation.state.params;
    this.setState({
      id: identificacao,
      imageUrl: imageUrl,
      nomeLocal: nomeLocal,
      categoria: categoria,
      telReserva: telefone,
      endereco: endereco,
      avaliacao: avaliacao,
    });
  }

  Avaliar() {
    this.props.navigation.navigate('Avaliacao');
  }

  AddFavoritos() {
    const { currentUser } = firebase.auth();

    const db = firebase.database().ref(`/favoritos/${currentUser.uid}`);

    db.push({
      img: this.state.imageUrl,
      nomeLocal: this.state.nomeLocal,
    }).then(() => {
      Alert.alert('Sucesso', 'Adicionado com sucesso aos favoritos');
    });
  }

  render() {
    const {
      imageUrl,
      nomeLocal,
      categoria,
      telReserva,
      endereco,
      avaliacao,
    } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.texto}> {nomeLocal} </Text>
          <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
            {this.state.imageUrl ? null : (
              <Text style={styles.textoSemImg}>Sem Imagem </Text>
            )}
          </ImageBackground>
          <AirbnbRating
            style={{ margin: 0 }}
            defaultRating={avaliacao}
            reviews={[1, 2, 3, 4, 5]}
            startingValue={5}
            isDisabled
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dados}> Categoria: </Text>
            <Text style={styles.txtDados}>{categoria}</Text>
          </View>

          <Text style={styles.dados}> Endereço: </Text>
          <Text style={styles.txtDados}>{endereco} </Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dados}> Telefone: </Text>
            <Text style={styles.txtDados}>{telReserva}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dados}> Coméntarios: </Text>
            <Text style={styles.txtDados} multiline></Text>
          </View>

          <View
            style={{
              flex: 1,
              width: '95%',
              borderColor: '#CCC',
              borderWidth: 1,
            }}
          ></View>

          <TouchableOpacity
            style={[styles.btn, styles.corBtnEntrar]}
            onPress={() => this.Avaliar()}
          >
            <Text style={styles.txtBtn}>Avaliar Local</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.corBtnFavoritos]}
            onPress={() => this.AddFavoritos()}
          >
            <Text style={styles.txtBtn}>Adicionar aos Favoritos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 300,
    height: 250,
    borderWidth: 1,
    borderColor: '#999',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoSemImg: {
    fontSize: 18,
    color: '#999',
  },
  texto: {
    marginHorizontal: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#37752C',
  },
  dados: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtDados: {
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginRight: '10%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    backgroundColor: '#37752C',
  },
  corBtnFavoritos: {
    backgroundColor: '#FF7302',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
});
