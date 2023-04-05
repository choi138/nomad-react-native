import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: #fafafa;
`;

export const TitleWrap = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #171717;
  align-items: center;
  padding: 10px 0;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: 300;
`;

export const DescriptionWrap = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #171717;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
`;

export const WeatherContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const WeatherImage = styled.Image`
  margin-top: 20px;
  width: 92%;
  height: 300px;
`;

export const LinkWrap = styled.View`
  width: 100%;
  align-items: flex-start;
  padding-left: 10px;
`;

export const LinkButton = styled.Button`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
`;
