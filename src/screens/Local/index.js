import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';



export default class Local extends Component {
  constructor(props){
    super(props);

    this.state = {
      imageUrl : '',
      nomeLocal : ''
    }
    
    
  }

  componentWillMount(){
    const { nomeLocal, imageUrl } = this.props.navigation.state.params;
    this.setState({ imageUrl:imageUrl, nomeLocal:nomeLocal })

  }

  render(){
    const { imageUrl } = this.state;
    return(
      <View style={styles.container}>
        <Text style={ styles.texto }> { this.state.nomeLocal } </Text>
        <ImageBackground  source={{uri:imageUrl}} style={ styles.image } >
          {this.state.imageUrl ? null :
            <Text style={styles.textoSemImg}>Sem Imagem </Text>
          }
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width:300,
    height:250,
    borderWidth:1,
    borderColor:'#999',
    resizeMode:'contain',
    alignItems: 'center',
    justifyContent:'center',
  },
  textoSemImg:{
    fontSize:18,
    color:'#999'
  },
  texto:{
    margin:20,
    fontSize:25,
    fontWeight:'bold',
    color:'#37752C',

  }
})