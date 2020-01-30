import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import firebase from '~/config/ConexaoFirebase';

export default class Avaliacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estacionamento: 'Nao',
      saida: 'Nao',
      rampas: 'Nao',
      caoGuia: 'Nao',
      braille: 'Nao',
      banheiro: 'Nao',
      etiquetadas: 'Nao',
      circulacao: 'Nao',
      libras: 'Nao',
      interpretes: 'Nao',
      placas: 'Nao',
      descricao: 'Nao',
      tatil: 'Nao',
      comentarios: [],
      loading: false,
    };
  }

  enviar() {
    Keyboard.dismiss();

    this.setState({ loading: true, msg: '' });
    const {
      estacionamento,
      saida,
      rampas,
      caoGuia,
      braille,
      banheiro,
      etiquetadas,
      circulacao,
      libras,
      interpretes,
      placas,
      descricao,
      tatil,
      comentarios,
    } = this.state;

    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/Avaliacao/local`)
      .push({
        estacionamento,
        saida,
        rampas,
        caoGuia,
        braille,
        banheiro,
        etiquetadas,
        circulacao,
        libras,
        interpretes,
        placas,
        descricao,
        tatil,
      })
      .then(() => {
        Alert.alert('Sucesso', 'Inserido dados com sucesso');
      })
      .catch(() => Alert.alert("Erro","Entre com contato com suporte"));
  }

  render() {
    const {
      estacionamento,
      saida,
      rampas,
      caoGuia,
      braille,
      banheiro,
      etiquetadas,
      circulacao,
      libras,
      interpretes,
      placas,
      descricao,
      tatil,
      comentarios,
    } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.pergunta}>
            Estacionamento possui vagas para deficientes?
          </Text>
          <Picker
            selectedValue={estacionamento}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ estacionamento: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Entradas e saídas são bem localizadas?
          </Text>
          <Picker
            selectedValue={saida}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ saida: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Existem rampas e corrimãos para facilitar o acesso/deslocamento?
          </Text>
          <Picker
            selectedValue={rampas}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ rampas: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            O ambiente é apto para receber cães-guia?
          </Text>
          <Picker
            selectedValue={caoGuia}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ caoGuia: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Encontram-se folhetos informativos em braille, como mapa do local,
            cardápio e dentre outros ?
          </Text>
          <Picker
            selectedValue={braille}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ braille: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}> Há banheiros adaptados?</Text>
          <Picker
            selectedValue={banheiro}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ banheiro: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Portas são etiquetadas em braille, como sanitário masculino,
            feminino e/ou adaptados?
          </Text>
          <Picker
            selectedValue={etiquetadas}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ etiquetadas: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            O ambiente apresenta facilidade de circulação interna?
          </Text>
          <Picker
            selectedValue={circulacao}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ circulacao: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>Oferecem atendimento em libras?</Text>
          <Picker
            selectedValue={libras}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ libras: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            O ambiente dispõem de guias e intérpretes?
          </Text>
          <Picker
            selectedValue={interpretes}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ interpretes: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Há placas e cartazes com letras em tamanhos legíveis?
          </Text>
          <Picker
            selectedValue={placas}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ placas: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Possui descrição em braille próximos a entradas e saídas e
            corrimãos?
          </Text>
          <Picker
            selectedValue={descricao}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ descricao: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>
            Contém piso tátil no ambiente para auxiliar o acesso/circulação?
          </Text>
          <Picker
            selectedValue={tatil}
            style={styles.input}
            itemStyle={styles.seletor}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ tatil: itemValue })
            }
          >
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Nao" />
          </Picker>
          <Text style={styles.pergunta}>Adicionar a avaliação</Text>
          <AirbnbRating
            style={{ margin: 0 }}
            defaultRating={0}
            reviews={[1, 2, 3, 4, 5]}
            startingValue={0}
          />
          <Text style={styles.pergunta}>Comentário</Text>
          <TextInput
            placeholder="Adicionar comentário"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            value={comentarios}
            ref={comentarios}
            multiline
            numberOfLines={5}
            onChangeText={comentarios => {
              this.setState({ comentarios });
            }}
          />

          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              this.enviar();
            }}
          >
            <Text style={styles.txtBtn}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pergunta: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#37752C',
    width: '95%',
    height: 45,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    fontSize: 20,
    height: null,
    width: '95%',
  },
  txtBtn: {
    fontFamily: 'Roboto',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
