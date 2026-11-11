import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AccessLocationScreen({ navigation }: { navigation?: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mapIllustration}>
          <View style={styles.mapCircle}>
            <Ionicons name="location" size={50} color="#FF7622" />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Орынды анықтауға рұқсат беру</Text>
          <Text style={styles.subtitle}>
            FOOD қолданбаны пайдалану кезінде ғана орналасқан жеріңізге қол жеткізеді
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation?.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Рұқсат беру</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  mapIllustration: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#FFF5EC',
    borderRadius: 100,
  },
  mapCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFE1C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: { alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#181C2E', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#A0A5BA', textAlign: 'center', lineHeight: 22, paddingHorizontal: 20 },
  footer: { padding: 24 },
  button: {
    backgroundColor: '#FF7622',
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});