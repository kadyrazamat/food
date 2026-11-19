import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccessLocationScreen({ navigation }: { navigation?: any }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.12, duration: 900, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Орналасуды анықтау</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.centerBox}>
        <Animated.View style={[styles.iconCircle, { transform: [{ scale: pulseAnim }] }]}>
          <Ionicons name="location" size={44} color="#FF7622" />
        </Animated.View>
        <Text style={styles.title}>Мекенжайыңызды табайық</Text>
        <Text style={styles.subtitle}>
          Жақын маңдағы мейрамханалар мен жылдам жеткізу уақытын дәл көрсету үшін геолокацияға рұқсат беріңіз.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('HomeScreen')}>
          <Text style={styles.btnPrimaryText}>ОРНАЛАСУДЫ РҰҚСАТ ЕТУ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation?.navigate('MapScreen')}>
          <Text style={styles.btnSecondaryText}>Картадан қолмен таңдау</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between', padding: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  centerBox: { alignItems: 'center', paddingHorizontal: 12 },
  iconCircle: { width: 104, height: 104, borderRadius: 52, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '700', color: '#181C2E', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', lineHeight: 21 },
  footer: { gap: 12 },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
  btnSecondary: { height: 46, justifyContent: 'center', alignItems: 'center' },
  btnSecondaryText: { color: '#666', fontSize: 14, fontWeight: '600' },
});