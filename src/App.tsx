import { StatusBar } from "expo-status-bar";
import * as S from "./styled";

export default function App() {
  return (
    <S.Container>
      <S.CityWrap >
        <S.CityName >Seoul</S.CityName>
      </S.CityWrap>
      <S.WeatherWrap >
        <S.WeatherInfo>
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

