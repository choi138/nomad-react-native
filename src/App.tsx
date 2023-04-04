import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { TodoScreen, WeatherScreen, MainScreen } from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
