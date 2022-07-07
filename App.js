import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import CharacterScreen from './screens/CharacterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='CharacterScreen' component={CharacterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}