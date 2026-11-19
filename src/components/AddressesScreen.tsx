import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddressesScreen({ navigation }: { navigation?: any }) {
  const [selectedId, setSelectedId] = useState(1);
  const addresses = [
    { id: 1, title: 'Үй', detail: 'Алғабас ықшамауданы, 24-үй, 12-пәтер' },
    { id: 2, title: 'Жұмыс', detail: 'Сәтбаев көшесі, 90-ғимарат, 4-қабат' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Мекенжайларым</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {addresses.map((addr) => {
          const active = addr.id === selectedId;
          return (
            <TouchableOpacity
              key={addr.id}
              style={[styles.addrCard, active && styles.addrCardActive]}
              onPress={() => setSelectedId(addr.id)}
            >
              <Ionicons name="location-outline" size={22} color={active ? '#FF7622' : '#555'} />
              <View style={styles.addrInfo}>
                <Text style={styles.addrTitle}>{addr.title}</Text>
                <Text style={styles.addrDetail}>{addr.detail}</Text>
              </View>
              {active && <Ionicons name="checkmark-circle" size={22} color="#FF7622" />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('MapScreen')}>
          <Text style={styles.btnPrimaryText}>КАРТАДАН ЖАҢА МЕНКЕНЖАЙ ҚОСУ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'space-between' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 20, gap: 12 },
  addrCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FA', padding: 16, borderRadius: 14, gap: 12 },
  addrCardActive: { backgroundColor: '#FFF5EC', borderWidth: 1, borderColor: '#FF7622' },
  addrInfo: { flex: 1 },
  addrTitle: { fontSize: 15, fontWeight: 'bold', color: '#181C2E' },
  addrDetail: { fontSize: 13, color: '#666', marginTop: 2 },
  footer: { padding: 20 },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});