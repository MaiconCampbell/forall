import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
        <Text style={styles.txt, {fontSize: 30, textAlign:'center', alignContent:'space-around'}}>Avaliar Local (2 de 4)</Text>
        <SelectInput
          label="Encontram-se folhetos informativos em braille, como mapa do local, cardápio e dentre outros ?"
          labelStyle={styles.differentSelectLabel}
          options={options}
        />

        <SelectInput
          label="Há banheiros adaptados?"
          options={options}
          labelStyle={styles.differentSelectLabel}

         
        />

        <SelectInput
          label="O ambiente apresenta facilidade de circulação interna?"
          options={options}
          labelStyle={styles.differentSelectLabel}

        />

        <SelectInput
          label="Portas são etiquetadas em braille, como sanitário masculino, feminino e/ou adaptados?"
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
    margin: -2,
  },
  
  txtBtn: {
    fontFamily: 'Roboto',
    color: '#FFF',
    fontWeight: 'normal',
    textAlign: 'center',
    
  },
});




export default app;
