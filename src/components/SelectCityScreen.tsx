import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const cities = ['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе'];

export default function SelectCityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Қаланы таңдаңыз</Text>
      <Text style={styles.subtitle}>Жеткізу қызметі үшін өз қалаңызды белгілеңіз</Text>

      <FlatList
        data={cities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityItem} onPress={() => console.log(item, 'таңдалды')}>
            <Text style={styles.cityText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24', padding: 24, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: '700', color: '#fff', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center', marginBottom: 30 },
  list: { gap: 12 },
  cityItem: { backgroundColor: '#222834', padding: 18, borderRadius: 12, alignItems: 'center' },
  cityText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});