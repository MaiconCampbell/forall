import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import SelectInput from '@tele2/react-native-select-input';

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
        <Text style={styles.txt, {fontSize: 30, textAlign:'center', alignContent:'space-around'}}>Avaliação de local (3 de 4)</Text>
        <SelectInput
          label="Oferecem atendimento em libras?"
          labelStyle={styles.differentSelectLabel}
          options={options}
        />

        <SelectInput
          label="O ambiente dispõem de guias e intérpretes?"
          options={options}
          labelStyle={styles.differentSelectLabel}

         
        />

        <SelectInput
          label="Há placas e cartazes com letras em tamanhos legíveis?"
          options={options}
          labelStyle={styles.differentSelectLabel}

        />

        <SelectInput
          label="Possui descrição em braille próximos a entradas e saídas e corrimãos?"
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
  },
  
  txtBtn: {
    fontFamily: 'Roboto',
    color: '#FFF',
    fontWeight: 'normal',
    textAlign: 'center',
    
  },
});


export default app;
