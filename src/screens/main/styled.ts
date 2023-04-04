import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fafafa;
  justify-content: flex-start;
  padding-top: 100px;
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

export const WeatherImage = styled.Image`
  width: 100%;
  height: 300px;
`;
