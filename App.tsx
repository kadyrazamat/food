import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Компоненттерді дұрыс жолмен импорттаймыз
import { LoginScreen } from './src/components/LoginScreen';
import { ForgetPassword } from './src/components/ForgetPassword';
import { OTPScreen } from './src/components/OTPScreen';
import { RegisterScreen } from './src/components/RegisterScreen';
import { ResetPasswordScreen } from './src/components/ResetPasswordScreen';
import { SelectCityScreen } from './src/components/SelectCityScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

