import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Empresa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#37752C" barStyle="light-content" />
        <View style={styles.areaImg} />
        <View style={styles.areaEmpresa}>
          <View style={styles.areaDados}>
            <Text> Dados Empresa</Text>
          </View>
          <View style={styles.areaBtn}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#37752C' }]}
            >
              <Text style={styles.txtBtn}>Como Chegar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#184481' }]}
            >
              <Text style={styles.txtBtn}>Avaliar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaImg: {
    flex: 1,
    backgroundColor: '#AAA',
    margin: 10,
  },
  areaEmpresa: {
    flex: 2,
    backgroundColor: '#DDD',
  },
  areaDados: {
    flex: 1,
    backgroundColor: '#5484',
    margin: 10,
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  btn: {
    width: '48%',
    height: 40,
    borderRadius: 20,
  },
  txtBtn: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'normal',
    textAlign: 'center',
    padding: 5,
  },
});

export default Empresa;
