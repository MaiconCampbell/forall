import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7BEA7C', '#7BEA7C', '#307125', '#008E47'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
