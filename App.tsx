import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/components/SplashScreen';
import Onboarding1 from './src/components/Onboarding1';
import Onboarding2 from './src/components/Onboarding2';
import Onboarding3 from './src/components/Onboarding3';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ForgetPassword from './src/components/ForgetPassword';
import OTPScreen from './src/components/OTPScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import SelectCityScreen from './src/components/SelectCityScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
