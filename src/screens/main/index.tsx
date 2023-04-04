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
        <S.Description>
          Welcome to our app, where you can easily organize your day with a to-do list feature and
          stay up-to-date on the latest weather information. Plan your day and stay prepared for any
          weather conditions, all in one convenient place.
        </S.Description>
      </S.DescriptionWrap>
      <Button title="Go to Weather" onPress={() => navigate('Weather')} />
      <Button title="Go to ToDo" onPress={() => navigate('ToDo')} />
      <StatusBar style="dark" />
    </S.Container>
  );
};
