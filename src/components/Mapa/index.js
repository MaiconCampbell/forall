import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import firebase from '~/config/ConexaoFirebase';

// importações para mapa e rota
import MapView from 'react-native-maps';
import Pesquisa from '../Pesquisa';

export default class Mapa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null,
      destination: null,
      lugares:[],
      lat:0,
      lng:0,
      locais:[
        {
          id: 1,
          titulo: 'Você está aqui',
          descricao: 'sua localização atual',
          latitude: -22.46443937,
          longitude: -44.44978774
        },
      ]
    };

  
}//End constructor

  _selecionar(local) {
    this.props.navigation.navigate('Local', {
      nomeLocal : local.nomeFantasia, 
      imageUrl : local.imageUrl});
  }

  
  _mapReady = () => {
    this.state.locais[0].mark.showCallout();
  }

  componentWillMount(){
    let arrayLocais = []
    const locaiRef =  firebase.database().ref('locais');
    locaiRef.once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        arrayLocais.push(childSnapshot.val()) 
      })

      this.setState({ locais : arrayLocais })

    })
  }


  render() {
    let { latitude, longitude } = this.state.locais[0];

    return (
      <View style={styles.container}>
        
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034
          }}
          style={styles.mapview}
          showsUserLocation
          loadingEnabled
          showsPointsOfInterest={false}
          showsBuildings={false}
          onMapReady={this._mapReady}
        >
          {this.state.locais.map((local, index) => (
            <MapView.Marker
              ref={mark => local.mark = mark}
              title={local.nomeFantasia}
              description={local.categoria}
              key={index}
              pinColor={'green'}
              coordinate={{
                latitude : local.latitude,
                longitude : local.longitude,
              }}
            />  
          )) }
        </MapView>
  
        <ScrollView 
          style={styles.locaisContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e =>{
            const scrolled = e.nativeEvent.contentOffset.x;

            const local = (scrolled > 0)
              ? scrolled / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, mark } = this.state.locais[local];

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 1000)

            setTimeout(() => {
              mark.showCallout();
            }, 1000)
          }}
          >
      

          { this.state.locais.map(local => (
            <View key={local.id} style={styles.local}> 
              <Text style={styles.textNome}>{local.nomeFantasia}</Text>
              <View style={styles.linha}></View>
              <View style={{flex:1}}>
                <Text style={styles.textCategoria}>{local.categoria}</Text>
                <Text style={styles.textHora}>Abre ás: {local.horaInicio}</Text>
                <Text style={styles.textHora}>Fecha ás: {local.horaFim}</Text>
                <Text style={styles.textHora}>Telefone: {local.telReserva}</Text>
                <TouchableOpacity style={styles.buttonSelecionar} onPress={() => { this._selecionar(local) }}>
                  <Text style={{fontSize:15}}>Selecionar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linha}></View>
              <Text numberOfLines={2} style={styles.textEndereco}>{local.endereco}</Text>
            </View>
          )) }
              
        </ScrollView>

        {/* <Pesquisa onLocationSelected={this.handleLocationSelect} /> */}
      </View>
            

    )
  }
}




const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },

  mapview:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },

  locaisContainer:{
    width:'100%',
    maxHeight:250
  },

  local:{
    width: width -40,
    maxHeight:250,
    backgroundColor: '#37752C', 
    marginHorizontal: 20,
    borderRadius:10, 
    padding:20
  },

  textNome:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff'
  },

  textCategoria:{
    fontSize:18,
    color:'#fff',
    marginBottom:5
  },

  textEndereco:{
    fontSize:15,
    color:'#fff'
  },
  textHora:{
    fontSize:15,
    color:'#fff'
  },

  buttonSelecionar:{
    height:30,
    marginVertical:5,
    backgroundColor:'#fff',
    borderRadius:33,
    alignItems:'center',
    justifyContent:'center'
  },

  linha:{
    borderBottomWidth:1,
    borderBottomColor:'#000',
    opacity:0.5,
    marginVertical:5
  }
});
