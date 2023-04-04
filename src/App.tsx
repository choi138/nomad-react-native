import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { TodoScreen, WeatherScreen, MainScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="ToDo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
