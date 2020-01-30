// componentes que são usados para navegação entre screen
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// importação dos componentes screens
import PreLoad from './screens/Preload';
import Login from './screens/Login';
import RecuperarSenha from './screens/RecuperarSenha';
import Local from './screens/Local';
import CadastroUsuario from './screens/CadastroUsuario';
import Main from './screens/Main';
import DadosUsuario from './screens/DadosUsuario';
import Favoritos from './screens/Favoritos';
import Cadastrolocal from './screens/CadastroLocal';
import LocalizacaoMapa from './screens/LocalizacaoMapa';
import Transporte from './screens/Transporte';
import CadastroTransporte from './screens/CadastroTransporte';
import Avaliacao from './screens/AvaliacaoLocal';

// console.disableYellowBox = true;

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
    RecuperarSenha: {
      screen: RecuperarSenha,
      navigationOptions: {
        title: 'Recuperar conta',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    CadastroUsuario: {
      screen: CadastroUsuario,
      navigationOptions: {
        title: 'Cadastro de usuário',
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
    LocalizacaoMapa: {
      screen: LocalizacaoMapa,
      navigationOptions: {
        title: 'Tela do Local',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Local: {
      screen: Local,
      navigationOptions: {
        title: 'Local',
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
    DadosUsuario: {
      screen: DadosUsuario,
      navigationOptions: {
        title: 'Editar perfil',
        headerStyle: {
          backgroundColor: '#37752C',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Cadastrolocal: {
      screen: Cadastrolocal,
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
    CadastroTransporte: {
      screen: CadastroTransporte,
      navigationOptions: {
        title: 'Cadastro de motorista',
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
    Avaliacao: {
      screen: Avaliacao,
      navigationOptions: {
        title: 'Avaliação Local',
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
