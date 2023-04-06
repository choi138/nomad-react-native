import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { DescriptionList } from '@/constant';

import * as S from './styled';

export const MainScreen: React.FC = () => {
  const navigate = useNavigation().navigate as (s: string) => void;
  return (
    <S.Container>
      <View style={{ marginTop: 100, marginBottom: 80 }}>
        <S.TitleWrap>
          <S.Title>Main Screen</S.Title>
        </S.TitleWrap>
        <S.DescriptionWrap>
          {DescriptionList.map(({ text }, i) => (
            <S.Description key={i}>{text}</S.Description>
          ))}
        </S.DescriptionWrap>
        <S.WeatherContainer>
          <S.WeatherImage source={require('../../assets/weather.png')} />
          <S.LinkWrap>
            <S.LinkButton title="Weather" color="black" onPress={() => navigate('Weather')} />
          </S.LinkWrap>
        </S.WeatherContainer>
        <S.WeatherContainer>
          <S.WeatherImage source={require('../../assets/todo.png')} />
          <S.LinkWrap>
            <S.LinkButton title="ToDo" color="black" onPress={() => navigate('ToDo')} />
          </S.LinkWrap>
        </S.WeatherContainer>
        <StatusBar style="dark" />
      </View>
    </S.Container>
  );
};
