import { ScrollView, Text, View } from "react-native";
import styled from 'styled-components';

export const Container = styled(View)`
    flex: 1;
    background-color: #FA647C;
`;

export const CityWrap = styled(View)`
    flex: 1.2;
    justify-content: center;
    align-items: center;
`;

export const CityName = styled(Text)`
    font-size: 68;
    font-weight: bold;
    color: #fafafa;
`;

export const WeatherWrap = styled(ScrollView).attrs({
    contentContainerStyle: {
    }
})`
`;

export const WeatherInfo = styled(View) < { screen_width: number }> `
    width: ${props => props.screen_width};
    align-items: flex-start;
    padding-left: 20;
`;

export const TempContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Temp = styled(Text)`
    margin-top: 50;
    font-size: 100;
    color: #fafafa;
`;

export const TempIcon = styled(Text)`
    font-size: 30;
    font-weight: 600;
    color: #fafafa;
    margin-bottom: 60;
    align-self: center;
`;

export const Description = styled(Text)`
    margin-top: -10;
    font-size: 35;
    font-weight: 500;
    color: #fafafa;
`;

export const SubDescription = styled(Text)`
    margin-top: -5;
    font-size: 25;
    font-weight: 500;
    color: #fafafa;
`;