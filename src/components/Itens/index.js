import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Itens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerFoto}>
          <Image style={styles.foto} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.containerTxt}>
          <Text style={styles.txtTituilo}>{this.props.item.titulo}</Text>
          <Text style={styles.TxtValor}>R$ {this.props.item.valor}</Text>
          <Text style={styles.TxtDetalhes}>
            Local: {this.props.item.local_anuncio}
          </Text>
          <Text style={styles.TxtDetalhes}>
            Dt publicação: {this.props.item.data_publicacao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    height: 100,
    width: 100,
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
});

export default Itens;
