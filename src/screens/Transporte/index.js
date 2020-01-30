import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

class Transporte extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {
    this.props.navigation.navigate('CadastroTransporte');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.container}>
          <View style={styles.containerFoto}>
            <Image
              style={styles.foto}
              source={require('../../assets/img/img.jpg')}
            />
          </View>
          <View style={styles.containerTxt}>
            <Text style={styles.txtTituilo}>Maicon Campbell</Text>
            <Text style={styles.TxtValor}>Resende e Regiões</Text>
            <Text style={styles.TxtDetalhes}>(24) 99875-8221</Text>
            <Text style={styles.TxtDetalhes}>
              Carro: Fiat Doblo 1.8 MPI, comporta até 6 passageiros, confortável{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.containerFoto}>
            <Image
              style={styles.foto}
              source={require('../../assets/img/img.jpg')}
            />
          </View>
          <View style={styles.containerTxt}>
            <Text style={styles.txtTituilo}>Maicon Campbell</Text>
            <Text style={styles.TxtValor}>Resende e Regiões</Text>
            <Text style={styles.TxtDetalhes}>(24) 99875-8221</Text>
            <Text style={styles.TxtDetalhes}>Classificação: 9,6</Text>
            <Text style={styles.TxtDetalhes}>
              Carro: Fiat Doblo 1.8 MPI, comporta até 6 passageiros, confortável{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.containerFoto}>
            <Image
              style={styles.foto}
              source={require('../../assets/img/img.jpg')}
            />
          </View>
          <View style={styles.containerTxt}>
            <Text style={styles.txtTituilo}>Maicon Campbell</Text>
            <Text style={styles.TxtValor}>Resende e Regiões</Text>
            <Text style={styles.TxtDetalhes}>(24) 99875-8221</Text>
            <Text style={styles.TxtDetalhes}>Classificação: 9,6</Text>
            <Text style={styles.TxtDetalhes}>
              Carro: Fiat Doblo 1.8 MPI, comporta até 6 passageiros, confortável{' '}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn} onPress={this.cadastrar}>
            <Text style={styles.txtBtn}>Divulgue seu transporte </Text>
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
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#999',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  containerFoto: {
    height: 102,
    width: 102,
  },
  foto: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 130,
    width: 130,
  },
  containerTxt: {
    flex: 1,
    marginLeft: 20,
  },
  txtTituilo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  TxtValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  TxtDetalhes: {
    fontSize: 16,
  },
  btn: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
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

export default Transporte;
