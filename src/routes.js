// componentes que são usados para navegação entre screen
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// importação dos componentes screens
import PreLoad from './pages/Preload';
import Login from './pages/Login';
import CadUsuario from './pages/CadUsuario';
import CadMotorista from './pages/CadMotorista';
import RecSenha from './pages/RecSenha';
// importação dos componentes de interações
import Main from './pages/Main';
import Localizacao from './pages/Localizacao';
import Favoritos from './pages/Favoritos';
import DadUsuario from './pages/DadUsuario';
import MenuLocal from './pages/MenuLocal';
import Transporte from './pages/Transporte';
import CadLocal from './pages/CadLocal';

console.disableYellowBox = true;

// criação da navegação por cabeçalho (Header)
const Navegador = createStackNavigator(
  {
    PreLoad: {
      screen: PreLoad,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    CadUsuario: {
      screen: CadUsuario,
      navigationOptions: {
        title: 'Cadastro de novo usuário',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    CadMotorista: {
      screen: CadMotorista,
      navigationOptions: {
        title: 'Cadastro de Motorista',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    RecSenha: {
      screen: RecSenha,
      navigationOptions: {
        title: 'Recuperar a senha do Usuário',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Localizacao: {
      screen: Localizacao,
      navigationOptions: {
        title: 'Localização',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    MenuLocal: {
      screen: MenuLocal,
      navigationOptions: {
        title: 'Localização',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Favoritos: {
      screen: Favoritos,
      navigationOptions: {
        title: 'Locais Favoritos',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    DadUsuario: {
      screen: DadUsuario,
      navigationOptions: {
        title: 'Dados do Usuário',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    CadLocal: {
      screen: CadLocal,
      navigationOptions: {
        title: 'Cadastro do local',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Transporte: {
      screen: Transporte,
      navigationOptions: {
        title: 'Transporte',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: 'PreLoad',
  }
);

// variavel que cria o gerenciamento do estado do aplicativo
const AppContainerMenu = createAppContainer(Navegador);

export default AppContainerMenu;
