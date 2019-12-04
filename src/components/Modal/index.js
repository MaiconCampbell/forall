import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible:true
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({modalVisible: true});
  }
  sair(visible){
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
          <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
            <View style={{margin:15, flex:1, alignItems:'flex-end', justifyContent: 'flex-start'}}>
              <Entrar />
            </View>
          </Modal>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
});
