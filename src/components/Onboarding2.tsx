import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

export default function Onboarding2({ navigation }: { navigation?: any }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View />
      {/* 2-ші сурет (Аспаз және тағам әзірлеп жатқан сәт)[cite: 3] */}
      <Animated.View style={[styles.illustrationBox, { opacity: fadeAnim }]}>
        <Image 
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgbzqEZ38XEtHgmyEIP1RsAEYG64T6BF7h_iy8RBMZdxy4u1ZN' }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </Animated.View>

      <Animated.View style={[styles.contentBox, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Тәжірибелі аспаздан таңдаңыз</Text>
        <Text style={styles.subtitle}>Жоғары сапалы және дәмді тағамдарды арнайы аспаздар сіз үшін әзірлейді.</Text>
      </Animated.View>

      <View style={styles.paginationDots}>
        <View style={styles.dot} /><View style={[styles.dot, styles.activeDot]} /><View style={styles.dot} /><View style={styles.dot} />
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.btnNext} onPress={() => navigation?.navigate('Onboarding3')}>
          <Text style={styles.btnNextText}>КЕЛЕСІ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSkip} onPress={() => navigation?.navigate('LoginScreen')}>
          <Text style={styles.btnSkipText}>Өткізу</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  illustrationBox: { alignItems: 'center', justifyContent: 'center' },
  image: { width: 280, height: 260 },
  contentBox: { alignItems: 'center', paddingHorizontal: 10 },
  title: { fontSize: 24, fontWeight: '700', color: '#111', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#777', textAlign: 'center', lineHeight: 20 },
  paginationDots: { flexDirection: 'row', justifyContent: 'center', gap: 6 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#e0e0e0' },
  activeDot: { width: 24, backgroundColor: '#ff6b00' },
  actionContainer: { width: '100%', gap: 12 },
  btnNext: { width: '100%', height: 56, backgroundColor: '#ff6b00', borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnNextText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  btnSkip: { alignItems: 'center', padding: 8 },
  btnSkipText: { color: '#888', fontSize: 14, fontWeight: '500' }
});