import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import UpLoadScreen from './src/screens/UploadScreen';
import H2Screen from './src/screens/H2Screen'
import H1Screen from './src/screens/H1Screen';
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'
import Footer from './src/screens/FooterComponent'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="H1" component={H1Screen} />
        <Stack.Screen name="H2" component={H2Screen} />
        <Stack.Screen name="Chi tiết" component={UpLoadScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
