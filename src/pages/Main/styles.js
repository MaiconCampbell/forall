import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  // enabled: Platform.OS === 'ios',
  // behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #DBD8D1;
  margin: 10px 10px;
`;

export const Btn = styled.TouchableOpacity`
  margin: 10px 10px;
`;

export const Txt = styled.Text`
  font-size: 16;
  text-align: center;
`;
