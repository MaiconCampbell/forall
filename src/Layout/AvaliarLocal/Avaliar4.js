import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
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
        <Text style={styles.txt, {fontSize: 30, textAlign:'center', alignContent:'space-around'}}>Avaliação de local (4 de 4)</Text>

        <SelectInput
          label="Contém piso tátil no ambiente para auxiliar o acesso/circulação?"
          labelStyle={styles.differentSelectLabel}
          options={options}
          />

          <TextInput
          style={styles.inputStyles}
          placeholder="Comentário"
          placeholderTextColor="#000"
          textAlignVertical="top"
          multiline={Boolean}
          />
        <TouchableOpacity style={[styles.btn]}>
          <Text style={styles.txtBtn}>Enviar</Text>
          
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
  inputStyles: {
    fontSize: 30,
    marginTop: 20,
    margin: 10,
    borderColor: '#33FF66',
    borderBottomWidth: 1, 
    
  },
});


export default app;

