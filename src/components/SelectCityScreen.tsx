import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const CITIES = [
  { id: '1', name: 'Алматы' },
  { id: '2', name: 'Астана' },
  { id: '3', name: 'Шымкент' },
  { id: '4', name: 'Қарағанды' },
  { id: '5', name: 'Ақтөбе' },
];

export const SelectCityScreen = ({ navigation }: any) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Қаланы таңдаңыз</Text>
      <Text style={styles.subtitle}>Тамақ жеткізу қызметін көрсету үшін қалаңызды белгілеңіз</Text>

      <FlatList
        data={CITIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cityCard,
              selectedCity === item.id && styles.selectedCityCard,
            ]}
            onPress={() => setSelectedCity(item.id)}
          >
            <Text
              style={[
                styles.cityName,
                selectedCity === item.id && styles.selectedCityName,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[styles.button, !selectedCity && styles.disabledButton]}
        disabled={!selectedCity}
        onPress={() => navigation?.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>Растау</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#FFF', paddingTop: 60 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1E1E2D', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#7E8299', marginBottom: 24 },
  cityCard: { backgroundColor: '#F5F8FA', padding: 18, borderRadius: 12, marginBottom: 12 },
  selectedCityCard: { backgroundColor: '#FF6B00' },
  cityName: { fontSize: 16, color: '#1E1E2D', fontWeight: '500' },
  selectedCityName: { color: '#FFF', fontWeight: 'bold' },
  button: { backgroundColor: '#FF6B00', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 16 },
  disabledButton: { backgroundColor: '#E4E6EF' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});