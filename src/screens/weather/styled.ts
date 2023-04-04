import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fa647c;
`;

export const CityWrap = styled.View`
  flex: 1.2;
  justify-content: center;
  align-items: center;
`;

export const CityName = styled.Text`
  font-size: 58px;
  font-weight: 500;
  color: #fafafa;
`;

export const WeatherWrap = styled.ScrollView.attrs({
  contentContainerStyle: {},
})`
  border: 1px solid black;
`;

export const WeatherInfo = styled.View<{ screen_width: number; loading: boolean }>`
  width: ${(props) => props.screen_width}px;
  align-items: ${(props) => (props.loading ? 'center' : 'flex-start')};
  padding-left: 40px;
  padding-right: 40px;
`;

export const TempContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TempItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Temp = styled.Text`
  margin-top: 50px;
  font-size: 100px;
  font-weight: 600;
  color: #fafafa;
`;

export const TempIcon = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 60px;
  align-self: center;
`;

export const Description = styled.Text`
  font-size: 35px;
  font-weight: 500;
  color: #fafafa;
`;

export const SubDescription = styled.Text`
  margin-top: -5px;
  font-size: 25px;
  font-weight: 500;
  color: #fafafa;
`;
