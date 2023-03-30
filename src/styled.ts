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
    align-items: center;
`;

export const TempContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Temp = styled(Text)`
    margin-top: 50;
    font-size: 178;
    color: #fafafa;
`;

export const TempIcon = styled(Text)`
    font-size: 36;
    font-weight: 600;
    /* border: 1px solid red; */
    color: #fafafa;
    margin-bottom: 80;
    /* height: fit-content; */
    align-self: center;
`;

export const Description = styled(Text)`
    font-size: 60;
    margin-top: -30;
    color: #fafafa;
`;

export const SubDescription = styled(Text)`
    color: #fafafa;
    font-size: 20;
`;