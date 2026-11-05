import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Onboarding2({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://unsplash.com' }} style={styles.image} />
      <Text style={styles.title}>Жылдам әрі сенімді жеткізу</Text>
      <Text style={styles.desc}>Тағамдарыңыз уақытында және ыстық күйінде есігіңізге дейін жетеді.</Text>
      <View style={styles.dots}><View style={styles.dot} /><View style={[styles.dot, styles.active]} /><View style={styles.dot} /></View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Onboarding3')}>
        <Text style={styles.btnText}>КЕЛЕСІ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24, alignItems: 'center', justifyContent: 'center' },
  image: { width: 250, height: 250, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#32343E', marginTop: 30 },
  desc: { fontSize: 16, color: '#646982', textAlign: 'center', marginTop: 10 },
  dots: { flexDirection: 'row', marginTop: 30 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E2E2E2', marginHorizontal: 4 },
  active: { backgroundColor: '#FF7A00', width: 16 },
  btn: { backgroundColor: '#FF7A00', width: '100%', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 40 },
  btnText: { color: '#FFFFFF', fontWeight: 'bold' }
});
