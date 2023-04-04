import { Button, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import * as S from './styled';

export const MainScreen: React.FC = () => {
  const navigate = useNavigation().navigate as (s: string) => void;
  return (
    <S.Container>
      <S.TitleWrap>
        <S.Title>Main Screen</S.Title>
      </S.TitleWrap>
      <S.DescriptionWrap>
        <S.Description>Stay organized and informed with</S.Description>
        <S.Description>W&T- featuring a to-do list</S.Description>
        <S.Description>and daily weather</S.Description>
        <S.Description>updates at your fingertips.</S.Description>
        <S.Description>Get started by selecting a tab</S.Description>
      </S.DescriptionWrap>
      <S.WeatherImage source={require('../../assets/weather.png')} />
      <Button title="Go to Weather" onPress={() => navigate('Weather')} />
      <Button title="Go to ToDo" onPress={() => navigate('ToDo')} />
      <StatusBar style="dark" />
    </S.Container>
  );
};
