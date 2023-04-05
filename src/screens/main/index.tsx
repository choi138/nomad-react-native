import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <S.WeatherContainer>
        <S.WeatherImage source={require('../../assets/weather.png')} />
        <S.LinkWrap>
          <S.LinkButton title="Go to Weather" color="black" onPress={() => navigate('Weather')} />
        </S.LinkWrap>
      </S.WeatherContainer>
      <S.WeatherContainer>
        <S.WeatherImage source={require('../../assets/todo.png')} />
        <S.LinkWrap>
          <S.LinkButton title="Go to ToDo" color="black" onPress={() => navigate('ToDo')} />
        </S.LinkWrap>
      </S.WeatherContainer>
      <StatusBar style="dark" />
    </S.Container>
  );
};
