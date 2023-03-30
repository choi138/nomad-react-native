import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View style={{ flex: 0.7 }}>
            <Text style={{ textAlign: "center", marginTop: 100 }}>Todo App</Text>
            <StatusBar style="dark" />
        </View>
    )
}