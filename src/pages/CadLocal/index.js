import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native'


export default class CadLocal extends Component {
	static navigationOptions = {
		title: "Login"
	};
	constructor(props) {
		super(props);
		this.state = {
			NomeFantasia: '',
      HoraAbertura: '',
      HoraFechamento: '',
      Telefone:'',
			Numero: '',
      Bairro: '',
      Municipio: '',
      Estado:'',
      Cep:'',

		};


	}

  render() {
		return (
			<View style={styles.container}>
				<Text style={styles.txt}>Preencha os campos para cadastrar um local</Text>
				<View style={styles.areaCadastro}>
					<TextInput name={"Nome Fantasia"} style={styles.input} placeholder={"Nome Fantasia"}
						underlineColorAndroid="transparent" autoFocus={true}
						onChangeText={(NomeFantasia) => this.setState({ NomeFantasia })} />

					<TextInput name={"HoraAbertura"} style={styles.input} placeholder={"Hora Abertura"}
						underlineColorAndroid="transparent"
						onChangeText={(HoraAbertura) => this.setState({ HoraAbertura })} />

					<TextInput name={"HoraFechamento"} style={styles.input} placeholder={"Hora Fechamento"}
						underlineColorAndroid="transparent"
						onChangeText={(HoraFechamento) => this.setState({ HoraFechamento })} />


					<TextInput name={"Telefone"} style={styles.input} placeholder={"Telefone"}
						underlineColorAndroid="transparent"
						onChangeText={(Telefone) => this.setState({ Telefone })} />


					<TextInput name={"Numero"} style={styles.input} placeholder={"Numero"}
						underlineColorAndroid="transparent"
						onChangeText={(Numero) => this.setState({ Numero })} />


					<TextInput name={"Bairro"} style={styles.input} placeholder={"Bairro"}
						underlineColorAndroid="transparent"
						onChangeText={(Bairro) => this.setState({ Bairro })} />

          <TextInput name={"Municipio"} style={styles.input} placeholder={"Municipio"}
						underlineColorAndroid="transparent"
						onChangeText={(Municipio) => this.setState({ Municipio })} />

          <TextInput name={"Estado"} style={styles.input} placeholder={"Estado"}
						underlineColorAndroid="transparent"
						onChangeText={(Estado) => this.setState({ Estado })} />

          <TextInput name={"CEP"} style={styles.input} placeholder={"CEP"}
						underlineColorAndroid="transparent"
						onChangeText={(Cep) => this.setState({ Cep })} />


					<TouchableOpacity style={[styles.btn, { backgroundColor: '#37752C' }]}
					onPress={this.Cadastrar}>
						<Text style={styles.txtBtn}>Cadastrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		justifyContent: 'center',
		alignItems: 'center',
	},
	txt: {
		fontFamily: 'Roboto',
		fontSize: 20,
		marginLeft: '5%',
		marginRight: '5%',
		textAlign: 'center',


	},
	input: {
		fontFamily: 'Roboto',
		color: "#4A4A4C",
		textAlign: 'center',
		width: '90%',
		height: 40,
		margin: 5,
		marginLeft: '5%',
		borderColor: '#000',
		borderBottomWidth: 1
	},
	areaCadastro: {
		width: '100%',
		marginTop: 30
	},
	btn: {
		width: '90%',
		height: 40,
		borderRadius: 20,
		marginLeft: '5%',
		marginTop: 15,
		marginRight: '5%'
	},
	txtBtn: {
		fontFamily: 'Roboto',
		fontSize: 20,
		color: '#FFF',
		fontWeight: 'normal',
		textAlign: 'center',
		padding: '1%',
	},
})
