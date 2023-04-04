import { Button, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import * as S from './styled';

export const MainScreen: React.FC = () => {
  const navigate = useNavigation().navigate as (s: string) => void;
  return (
    <S.Wrap>
      <S.Title>Main Screen</S.Title>
      <Button title="Go to Weather" onPress={() => navigate('Weather')} />
      <Button title="Go to ToDo" onPress={() => navigate('ToDo')} />
      <StatusBar style="dark" />
    </S.Wrap>
  );
};
