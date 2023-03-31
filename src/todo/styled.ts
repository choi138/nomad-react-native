import { Text, TextInput, View } from 'react-native';

import styled from 'styled-components';

export const TodoContainer = styled(View)<{ bg: string }>`
  flex: 1;
  background-color: ${(props) => props.bg};
  padding: 0 20px;
`;

export const Header = styled(View)`
  flex-direction: row;
  margin-top: 100;
  justify-content: space-between;
`;

export const Title = styled(Text)<{ isWorking: boolean }>`
  font-size: 38;
  font-weight: 600;
  color: ${(props) => (props.isWorking ? '#fafafa' : '#3A3D40')};
`;

export const Input = styled(TextInput)`
  background-color: white;
  padding: 15px 20px;
  border-radius: 30;
  margin: 20px 0;
  font-size: 18;
`;

export const ToDoList = styled(View)<{ bgColor?: string }>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  margin-bottom: 10;
  padding: 18px;
  border-radius: 15;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextToDo = styled(Text)<{ completed: boolean }>`
  color: #fafafa;
  font-size: 16;
  font-weight: 500;
  text-decoration-line: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const InputToDo = styled(TextInput)`
  color: #fafafa;
  font-size: 16;
  font-weight: 500;
`;

export const IConContainer = styled(View)`
  flex-direction: row;
`;
