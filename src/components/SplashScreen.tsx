import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://unsplash.com' }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>FoodApp</Text>
      <ActivityIndicator size="large" color="#FF7A00" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' },
  logo: { width: 100, height: 100, borderRadius: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#32343E', marginTop: 15 },
  loader: { position: 'absolute', bottom: 60 }
});
