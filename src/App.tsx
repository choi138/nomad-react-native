import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import * as S from "./styled";

const { width: SCREEN_WIDTH } = Dimensions.get("window");


export default function App() {
  const [city, setCity] = useState<string | null>("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState<boolean>(true);

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  }

  useEffect(() => {
    ask();
  }, [])

  return (
    <S.Container>
      <S.CityWrap >
        <S.CityName >{city}</S.CityName>
      </S.CityWrap>
      <S.WeatherWrap pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
        <S.WeatherInfo screen_width={SCREEN_WIDTH}>
          <S.Temp>27</S.Temp>
          <S.Description>Sunny</S.Description>
        </S.WeatherInfo>
        <S.WeatherInfo screen_width={SCREEN_WIDTH}>
          <S.Temp>27</S.Temp>
          <S.Description>Sunny</S.Description>
        </S.WeatherInfo>
        <S.WeatherInfo screen_width={SCREEN_WIDTH}>
          <S.Temp>27</S.Temp>
          <S.Description>Sunny</S.Description>
        </S.WeatherInfo>
        <S.WeatherInfo screen_width={SCREEN_WIDTH}>
          <S.Temp>27</S.Temp>
          <S.Description>Sunny</S.Description>
        </S.WeatherInfo>
      </S.WeatherWrap>
      <StatusBar style="light" />
    </S.Container >
  );
}

// 리네는 web이 아니라서 div를 사용할 수 없음. 대신에 View를 사용함.
// 모든 text는 Text 컴포넌트 안에 있어야 함.
// flex를 통해서 화면을 나눌 수 있음. flex: 1은 화면을 1:1:1로 나눔.
// flex인 부모가 중요함
// pagingEnabled는 스크롤을 하다가 멈추게 함.
// showsHorizontalScrollIndicator는 스크롤바를 없애줌.
// screen_width는 스크린의 너비를 가져옴.
// horizontal은 가로로 스크롤을 함.
