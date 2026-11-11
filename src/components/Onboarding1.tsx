import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

export default function Onboarding1({ navigation }: { navigation?: any }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View />
      <Animated.View style={[styles.illustrationBox, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Image 
          source={{ uri: 'https://img.magnific.com/premium-vector/binge-eating-concept-sad-guy-eats-lots-fast-food-hamburger-fat-man-holds-burger-problems-with-unhealthy-nutrition-psychological-disorder-flat-isolated-vector-illustration-white-background_633472-3905.jpg?semt=ais_hybrid&w=740&q=80' }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </Animated.View>

      <Animated.View style={[styles.contentBox, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Барлық сүйікті тағамдарыңыз</Text>
        <Text style={styles.subtitle}>Барлық ұнайтын тағамдарыңыз бір жерде, біз тапсырысты қабылдаймыз, қалғанын өзіміз жасаймыз.</Text>
      </Animated.View>

      <View style={styles.paginationDots}>
        <View style={[styles.dot, styles.activeDot]} /><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} />
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.btnNext} onPress={() => navigation?.navigate('Onboarding2')}>
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