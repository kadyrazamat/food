import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SelectCityScreen({ navigation }: { navigation?: any }) {
  const [selectedCity, setSelectedCity] = useState('Алматы');
  const cities = ['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Тараз', 'Атырау'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Жеткізу орнын таңдау</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.label}>Қазіргі қалаңыз</Text>
        
        {cities.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cityCard, selectedCity === city && styles.cityCardActive]}
            onPress={() => setSelectedCity(city)}
          >
            <Text style={[styles.cityText, selectedCity === city && styles.cityTextActive]}>
              {city}
            </Text>
            {selectedCity === city && (
              <Ionicons name="checkmark-circle" size={20} color="#FF7622" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation?.navigate('AccessLocationScreen')}
        >
          <Text style={styles.buttonText}>Жалғастыру</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 24 },
  label: { fontSize: 14, color: '#A0A5BA', marginBottom: 16 },
  cityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F5FA',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cityCardActive: {
    backgroundColor: '#FFF5EC',
    borderWidth: 1,
    borderColor: '#FF7622',
  },
  cityText: { fontSize: 15, fontWeight: '600', color: '#181C2E' },
  cityTextActive: { color: '#FF7622' },
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