import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SelectInput from 'react-native-select-input';

const options = [{
  value: 's',
  label: 'Sim',
  
}, {
  value: 'n',
  label: 'Não',
  
}, {
  value: 'ns',
  label: 'Não sei',
  
  

}];

class app extends Component {
  

  render() {
    return (
      
      <ScrollView style={styles.container}>
        <Text style={styles.txt, {fontSize: 30, textAlign:'center', alignContent:'space-around'}}>Avaliar Local (1 de 4)</Text>
        <SelectInput
          label="Estacionamento possui vagas para deficientes?"
          labelStyle={styles.differentSelectLabel}
          options={options}
        />

        <SelectInput
          label="Entradas e saídas são bem localizadas?"
          options={options}
          labelStyle={styles.differentSelectLabel}
          />

        <SelectInput
          label="Existem rampas e corrimãos para facilitar o acesso/deslocamento?"
          options={options}
          labelStyle={styles.differentSelectLabel}
        />

        <SelectInput
          label="O ambiente é apto para receber cães-guia?"
          labelStyle={styles.differentSelectLabel}
          options={options}
          />

        <TouchableOpacity style={[styles.btn]}>
          <Text style={styles.txtBtn}>Próxima</Text>
        </TouchableOpacity>
        
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    padding: 1,
    color:'#FFFFFF',
    fontSize: 30,
  },
  differentSelectLabel: {
    fontSize: 20,
    color: '#000000',
  },
  btn: {
    backgroundColor: '#37752C',
    color:'#000000',
    borderRadius: 30, 
    paddingHorizontal: 160, 
    padding: 20,
    marginEnd: 10,
    marginStart: 10,
    
  },
  
  txtBtn: {
    fontFamily: 'Roboto',
    color: '#FFF',
    fontWeight: 'normal',
    textAlign: 'center',
    
  },
});




export default app;
