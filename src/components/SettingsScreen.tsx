import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }: { navigation?: any }) {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [promoEnabled, setPromoEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Баптаулар</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.rowCard}>
          <Text style={styles.rowText}>Тапсырыс хабарландырулары</Text>
          <Switch value={pushEnabled} onValueChange={setPushEnabled} trackColor={{ true: '#ff6b00', false: '#444' }} />
        </View>

        <View style={styles.rowCard}>
          <Text style={styles.rowText}>Акциялар мен промокодтар</Text>
          <Switch value={promoEnabled} onValueChange={setPromoEnabled} trackColor={{ true: '#ff6b00', false: '#444' }} />
        </View>

        <View style={styles.rowCard}>
          <Text style={styles.rowText}>Қосымша тілі</Text>
          <Text style={styles.langBadge}>Қазақша (KK)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#181c24' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#222834', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#FFFFFF' },
  content: { padding: 20, gap: 14 },
  rowCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222834', padding: 16, borderRadius: 14 },
  rowText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  langBadge: { color: '#ff6b00', fontSize: 13, fontWeight: '700' },
});