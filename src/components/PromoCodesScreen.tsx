import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PromoCodesScreen({ navigation }: { navigation?: any }) {
  const [promo, setPromo] = useState('');
  const coupons = [
    { code: 'FOOD20', desc: 'Алғашқы тапсырысқа 20% жеңілдік' },
    { code: '#1243CD2', desc: 'Тегін жеткізу промокоды' },
  ];

  const applyCode = (code: string) => {
    Alert.alert('Промокод қолданылды', `${code} промокоды себетке белсендірілді.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Промокодтар</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Промокодты енгізіңіз"
            placeholderTextColor="#888"
            value={promo}
            onChangeText={setPromo}
          />
          <TouchableOpacity style={styles.applyBtn} onPress={() => applyCode(promo || 'FOOD20')}>
            <Text style={styles.applyText}>Қолдану</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Қолжетімді купондар</Text>
        {coupons.map((c) => (
          <View key={c.code} style={styles.couponCard}>
            <View>
              <Text style={styles.codeBadge}>{c.code}</Text>
              <Text style={styles.couponDesc}>{c.desc}</Text>
            </View>
            <TouchableOpacity style={styles.useBtn} onPress={() => applyCode(c.code)}>
              <Text style={styles.useBtnText}>Таңдау</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  content: { padding: 20 },
  inputRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  input: { flex: 1, backgroundColor: '#F0F5FA', height: 50, borderRadius: 12, paddingHorizontal: 14, color: '#181C2E' },
  applyBtn: { backgroundColor: '#FF7622', paddingHorizontal: 18, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  applyText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#181C2E', marginBottom: 12 },
  couponCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF8E1', padding: 16, borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: '#FFE082' },
  codeBadge: { fontSize: 15, fontWeight: '800', color: '#181C2E', marginBottom: 4 },
  couponDesc: { fontSize: 13, color: '#555' },
  useBtn: { backgroundColor: '#181C2E', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  useBtnText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
});