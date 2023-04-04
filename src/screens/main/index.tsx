import { Button, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const MainScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Main</Text>
      <Button title="Go to Weather" onPress={() => navigation.navigate('WeatherScreen')} />
      <Button title="Go to ToDo" onPress={() => navigation.navigate('ToDo')} />
    </View>
  );
};
