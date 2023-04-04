import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: tomato;
  justify-content: flex-start;
  padding-top: 100;
`;

export const TitleWrap = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: white;
  align-items: center;
  padding: 10px 0;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: 300;
`;

export const DescriptionWrap = styled.View`
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: white;
`;

export const Description = styled.Text`
  font-size: 24px;
  font-weight: 300;
`;
