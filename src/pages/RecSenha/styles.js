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
  background: #FFF;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Form = styled.View`
  flex: 1;
  align-self: stretch;
  margin-top: 5px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 8px;
  background: #37752c;
  border-radius: 25;
`;

export const Txt = styled.Text`
  font-size: 20;
`;
