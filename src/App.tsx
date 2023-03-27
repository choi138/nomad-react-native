import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>앙기모룽링</Text> */}
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View >
  );
}

// 리네는 web이 아니라서 div를 사용할 수 없음. 대신에 View를 사용함.
// 모든 text는 Text 컴포넌트 안에 있어야 함.
// flex를 통해서 화면을 나눌 수 있음. flex: 1은 화면을 1:1:1로 나눔.
// flex인 부모가 중요함

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA647C'
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  city: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: 'bold',
    color: '#fafafa',
  },
  weather: {
    flex: 3,
    // backgroundColor: "#5441d0",
  },
  day: {
    flex: 1,
    alignItems: 'center'
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
    color: '#fafafa',
  },
  description: {
    fontSize: 60,
    marginTop: -30,
    color: '#fafafa',
  }
});
