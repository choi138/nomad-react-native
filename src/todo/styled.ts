import { Text, TextInput, View } from 'react-native';

import styled from 'styled-components';

export const TodoContainer = styled(View) <{ bg: string }>`
  flex: 1;
  background-color: ${(props) => props.bg};
  padding-left: 20;
  padding-right: 20;
`;

export const Header = styled(View)`
  flex-direction: row;
  margin-top: 100;
  justify-content: space-between;
`;

export const Title = styled(Text) <{ isWorking: boolean }>`
  font-size: 38;
  font-weight: 600;
  color: ${(props) => (props.isWorking ? '#fafafa' : '#3A3D40')};
`;

export const Input = styled(TextInput)`
  background-color: white;
  /* color: black; */
`;