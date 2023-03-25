import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native/types";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>앙기모룽링</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// 리네는 web이 아니라서 div를 사용할 수 없음. 대신에 View를 사용함.
// 모든 text는 Text 컴포넌트 안에 있어야 함.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});
