import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './src/context/CartContext';

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
import AccessLocationScreen from './src/components/AccessLocationScreen';

import HomeScreen from './src/components/HomeScreen';
import SearchScreen from './src/components/SearchScreen';
import RestaurantDetailScreen from './src/components/RestaurantDetailScreen';
import CartScreen from './src/components/CartScreen';
import MapScreen from './src/components/MapScreen';
import PaymentScreen from './src/components/PaymentScreen';

// Жаңа беттер
import ProfileScreen from './src/components/ProfileScreen';
import EditProfileScreen from './src/components/EditProfileScreen';
import OrdersHistoryScreen from './src/components/OrdersHistoryScreen';
import OrderTrackingScreen from './src/components/OrderTrackingScreen';
import FavoritesScreen from './src/components/FavoritesScreen';
import AddressesScreen from './src/components/AddressesScreen';
import PaymentMethodsScreen from './src/components/PaymentMethodsScreen';
import PromoCodesScreen from './src/components/PromoCodesScreen';
import NotificationsScreen from './src/components/NotificationsScreen';
import CategoriesScreen from './src/components/CategoriesScreen';
import ReviewScreen from './src/components/ReviewScreen';
import SupportScreen from './src/components/SupportScreen';
import SettingsScreen from './src/components/SettingsScreen';
import OrderSuccessScreen from './src/components/OrderSuccessScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
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
          <Stack.Screen name="AccessLocationScreen" component={AccessLocationScreen} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="RestaurantDetailScreen" component={RestaurantDetailScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />

          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

          {/* Жаңа экрандар */}
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="OrdersHistoryScreen" component={OrdersHistoryScreen} />
          <Stack.Screen name="OrderTrackingScreen" component={OrderTrackingScreen} />
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen name="AddressesScreen" component={AddressesScreen} />
          <Stack.Screen name="PaymentMethodsScreen" component={PaymentMethodsScreen} />
          <Stack.Screen name="PromoCodesScreen" component={PromoCodesScreen} />
          <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
          <Stack.Screen name="SupportScreen" component={SupportScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="OrderSuccessScreen" component={OrderSuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}