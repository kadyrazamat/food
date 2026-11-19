import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderSuccessScreen({ navigation }: { navigation?: any }) {
  const scaleAnim = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View style={styles.center}>
        <Animated.View style={[styles.badgeCircle, { transform: [{ scale: scaleAnim }] }]}>
          <Ionicons name="checkmark-circle" size={84} color="#FF7622" />
        </Animated.View>
        <Text style={styles.title}>Тапсырыс қабылданды!</Text>
        <Text style={styles.subtitle}>
          Тағамыңыз дайындалуда. Курьер мекенжайыңызға қарай уақытылы жолға шығады.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('OrderTrackingScreen')}>
          <Text style={styles.btnPrimaryText}>ТАПСЫРЫСТЫ БАҚЫЛАУ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGhost} onPress={() => navigation?.navigate('HomeScreen')}>
          <Text style={styles.btnGhostText}>Басты бетке өту</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 24 },
  center: { alignItems: 'center' },
  badgeCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 25, fontWeight: '800', color: '#181C2E', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', lineHeight: 21, paddingHorizontal: 12 },
  footer: { gap: 10 },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  btnGhost: { height: 44, justifyContent: 'center', alignItems: 'center' },
  btnGhostText: { color: '#666', fontSize: 14, fontWeight: '600' },
});