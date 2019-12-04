import React, { Component } from 'react';
import { Image, Text, StyleSheet, StatusBar, Keyboard } from 'react-native';

const imgLogo = require('~/assets/img/Logo.png');

import {
  Container,
  ContainerLogo,
  Form,
  FormInput,
  SubmitButton,
  Txt,
} from './styles';

export default function CadUsuario() {
  return (
    <Container>
      <StatusBar backgroundColor="#37752C" barStyle="light-content" />
      <ContainerLogo>
        <Image source={imgLogo} style={{ flex: 1, resizeMode: 'center' }} />
      </ContainerLogo>

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
        />

        <FormInput
          icon="mail-outline"
          Keyboard="email-addres"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Confirme sua senha"
        />

        <SubmitButton onPress={() => {}}>
          <Txt>Criar Conta</Txt>
        </SubmitButton>
      </Form>
    </Container>
  );
}

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       senha: '',
//       confirmarSenha: '',
//       exibeSenha: false,
//     };

//     // realizamos o bind para informar que amar o escopo
//     this.mostraSenha = this.mostraSenha.bind(this);
//     this.entrar = this.entrar.bind(this);
//     this.criarConta = this.criarConta.bind(this);
//     this.esqueciSenha = this.esqueciSenha.bind(this);
//   }

//   // exibe ou esconde a senha
//   mostraSenha() {
//     this.setState({ exibeSenha: !this.state.exibeSenha });
//     if (this.state.exibeSenha) {
//       // exibe a senha
//     } else {
//       // esconde a senha
//     }
//   }

//   entrar() {
//     let { email, senha } = this.state;
//     const usuario = firebase.auth();

//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.props.navigation.dispatch(
//           StackActions.reset({
//             index: 0,
//             actions: [
//               NavigationActions.navigate({
//                 routeName: 'Index',
//               }),
//             ],
//           }),
//         );
//       }
//     });

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(this.state.email, this.state.senha)
//       .catch(error => {
//         alert(error.code);
//       });
//   }

//   criarConta() {
//     Keyboard.dismiss();
//     this.props.navigation.navigate('CadastroUsuario');
//   }

//   esqueciSenha() {
//     Keyboard.dismiss();
//     this.props.navigation.navigate('RecuperarSenha');
//   }

//   render() {
//     let { email, senha } = this.state;
//     return (
//       <View style={styles.container}>
//         {/* Imagem: logo */}
//         <Image source={img_Logo} style={styles.logo} />
//         {/* Campo de Txt: email */}
//         <TextInput
//           style={styles.inputStyles}
//           placeholder="e-mail"
//           placeholderTextColor="#AAA"
//           value={email}
//           underlineColorAndroid="transparent"
//           onChangeText={email => {
//             this.setState({ email: email });
//           }}
//         />
//         {/* Campo de Txt: senha */}
//         <View style={styles.areaSenha}>
//           <TextInput
//             style={styles.TxtSenha}
//             placeholder="senha"
//             placeholderTextColor="#AAA"
//             underlineColorAndroid="transparent"
//             secureTextEntry={true}
//             value={senha}
//             onChangeText={senha => {
//               this.setState({ senha });
//             }}
//           />
//           <TouchableOpacity onPress={this.mostraSenha}>
//             <Icon
//               name={this.state.exibeSenha ? 'eye' : 'eye-slash'}
//               size={20}
//               color="#DDD"
//             />
//           </TouchableOpacity>
//         </View>
//         {/* Btn: entrar */}
//         <TouchableOpacity
//           style={[styles.btn, { backgroundColor: '#37752C' }]}
//           onPress={this.entrar}>
//           <Text style={styles.txtBtn}>Entrar</Text>
//         </TouchableOpacity>
//         {/* Recuperar Senha */}
//         <View style={styles.containercriarconta}>
//           <TouchableOpacity onPress={this.esqueciSenha}>
//             <Text style={[styles.link]}>Esqueci minha senha</Text>
//           </TouchableOpacity>
//         </View>
//         {/* Linha de borda */}
//         <View style={styles.LinhaBorda} />
//         <View style={styles.areaRedes}>
//           {/* Btn: Gmail */}
//           <TouchableOpacity
//             style={[styles.btn, { backgroundColor: '#D54337' }]}
//             onPress={() => { }}>
//             <View style={{ flexDirection: "row", justifyContent: 'center' }}>
//               <Icon name="google" size={32} color="#FFF" style={styles.Icone} />
//               <Text style={styles.txtBtn}>Gmail</Text>
//             </View>
//           </TouchableOpacity>
//           {/* Btn: Facebook */}
//           <TouchableOpacity
//             style={[styles.btn, { backgroundColor: '#3B5998' }]}
//             onPress={() => { }}>
//             <View style={{ flexDirection: "row", justifyContent: 'center' }}>
//               <Icon name="facebook" size={32} color="#FFF" style={styles.Icone} />
//               <Text style={styles.txtBtn}>Facebook</Text>
//             </View>
//           </TouchableOpacity>

//         </View>
//         <View style={styles.containercriarconta}>
//           <Text style={styles.txt}>Não tenho Conta: </Text>
//           <TouchableOpacity onPress={this.criarConta}>
//             <Text style={[styles.link]}>Criar conta</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

const estilo = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
});

//const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     width: '90%',
//     height: '40%',
//     marginTop: 5,
//   },
//   inputStyles: {
//     fontSize: 20,
//     color: '#000',
//     textAlign: 'center',
//     width: '90%',
//     height: 50,
//     marginTop: -10,
//     margin: 5,
//     borderColor: '#CCC',
//     borderBottomWidth: 1,
//   },
//   TxtSenha: {
//     fontSize: 20,
//     color: '#000',
//     textAlign: 'center',
//     width: '90%',
//     height: 50,
//     marginTop: 10,
//     margin: 5,
//   },
//   areaSenha: {
//     flexDirection: 'row',
//     borderColor: '#CCC',
//     borderBottomWidth: 1,
//     height: 50,
//     width: '90%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   LinhaBorda: {
//     //flex: 1,
//     height: 1,
//     width: '90%',
//     marginTop: 10,
//     marginLeft: '5%',
//     backgroundColor: '#37752C',
//   },
//   btn: {
//     width: '90%',
//     height: 40,
//     borderRadius: 20,
//     marginLeft: '5%',
//     marginTop: 5,
//     marginRight: '5%',
//     borderBottomColor: '#000',
//   },
//   areaRedes: {
//     width: '100%',
//   },
//   txtBtn: {
//     textAlign: 'center',
//     fontFamily: 'Roboto',
//     fontSize: 20,
//     color: '#FFF',
//     fontWeight: 'normal',
//     padding: 5,
//   },
//   Icone: {
//     padding: 5,
//   },
//   containercriarconta: {
//     flexDirection: 'row',
//     width: '90%',
//     justifyContent: 'flex-end',
//   },
//   link: {
//     color: '#1A73E8',
//     fontSize: 20,
//   },
//});

// export { Login };
