import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  background: #aaa;
`;
export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 5px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 8px;
  background: #37752c;
`;

export const LoginFace = styled(Button)`
  align-self: stretch;
  margin-top: 8;
  background: #3b5998;
`;

export const Txt = styled.Text`
  font-size: 20;
`;

export const LoginGmail = styled(Button)`
  align-self: stretch;
  margin-top: 8px;
  background: #d54337;
`;

export const CriarConta = styled.View`
  padding: 0 15px;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
  ${'' /* border-color: #000;
  border-width: 1; */}
`;

export const TxtLink = styled.TouchableOpacity`
  align-self: flex-end;
  ${'' /* border-color: #000;
  border-width: 1; */}
`;
