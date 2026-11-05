import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function SplashScreen({ navigation }: { navigation?: any }) {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, { toValue: 1, friction: 3, useNativeDriver: true }).start();
    const timer = setTimeout(() => {
      navigation?.navigate('Onboarding1');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoBox, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.logoText}>Food</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ff6b00', justifyContent: 'center', alignItems: 'center' },
  logoBox: { padding: 20 },
  logoText: { fontSize: 48, fontWeight: '900', color: '#fff', letterSpacing: 2 }
});