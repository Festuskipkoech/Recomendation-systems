import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import FaceScanner from './components/FaceScanner';
// import HomePage from './components/HomePage';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} />
        {/* <Stack.Screen name="Home" component={HomePage} /> */}
        <Stack.Screen name='FaceScanner' component={FaceScanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
