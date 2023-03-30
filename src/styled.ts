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
    /* flex: 1; */
    width: ${props => props.screen_width};
    align-items: center;
`;

export const Temp = styled(Text)`
    margin-top: 50;
    font-size: 178;
    color: #fafafa;
`;

export const Description = styled(Text)`
    font-size: 60;
    margin-top: -30;
    color: #fafafa;
`;