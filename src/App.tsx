import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import { ActivityIndicator, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { DayList, IconMap } from './constant';
import * as S from './styled';

export default function App() {

  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  const ENV = process.env.API_KEY;

  const icons: IconMap = {
    Clouds: "cloudy",
    Clear: "day-sunny",
    Snow: "snow",
    Rain: "rains",
    Drizzle: "rain",
    Thunderstorm: "lightning",
  };

  const [city, setCity] = useState<string | null>('Loading...');
  const [days, setDays] = useState<DayList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [ok, setOk] = useState<boolean>(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync( // reverseGeocodeAsync는 위도와 경도를 통해 주소를 알아냄
      { latitude, longitude },
      { useGoogleMaps: false },
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${ENV}&units=metric`
    );
    const json = await response.json();
    setLoading(false);
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <S.Container>
      <S.CityWrap>
        <S.CityName>{city}</S.CityName>
      </S.CityWrap>
      <S.WeatherWrap pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
        {days.length === 0 ? (
          <S.WeatherInfo screen_width={SCREEN_WIDTH} loading={loading}>
            <ActivityIndicator color="white" size="large" />
          </S.WeatherInfo>
        ) : (
          days.map((day: DayList, index: number) => (
            <S.WeatherInfo screen_width={SCREEN_WIDTH} loading={loading} key={index}>
              <S.TempContainer>
                <S.TempItem>
                  <S.Temp>
                    {/** parseFloat하고 .toFixed(1)을 하면 소숫점 첫째자리까지만 표시됨 */}
                    {parseFloat(day.temp.day).toFixed(0)}
                  </S.Temp>
                  <S.TempIcon>o</S.TempIcon>
                </S.TempItem>
                <Fontisto name={icons[day.weather[0].main]} size={60} color="white" />
              </S.TempContainer>
              <S.Description>{day.weather[0].main}</S.Description>
              <S.SubDescription>{day.weather[0].description}</S.SubDescription>
            </S.WeatherInfo>
          ))
        )}
      </S.WeatherWrap>
      <StatusBar style="light" />
    </S.Container>
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

// ok 확인 여부 UI는 혼자서 ㄱㄱ
