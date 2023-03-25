import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>앙기모룽링</Text> */}
      <View style={[styles.view, { backgroundColor: "tomato" }]}></View>
      <View style={[styles.view, { backgroundColor: "teal", flex: 2 }]}></View>
      <View style={[styles.view, { backgroundColor: "orange" }]}></View>
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
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  view: {
    flex: 1
  }
});
