import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentMethodsScreen({ navigation }: { navigation?: any }) {
  const [selected, setSelected] = useState('kaspi');

  const handleAddCard = () => {
    Alert.alert('Жаңа карта', 'Банк картасын қосу терезесі ашылды.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Төлем карталары</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.card, selected === 'kaspi' && styles.cardActive]}
          onPress={() => setSelected('kaspi')}
        >
          <View style={styles.kaspiBadge}>
            <Text style={styles.kaspiText}>KASPI</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Kaspi Gold •••• 4821</Text>
            <Text style={styles.cardSub}>Негізгі әдіс</Text>
          </View>
          <Ionicons name={selected === 'kaspi' ? 'radio-button-on' : 'radio-button-off'} size={22} color="#FF7622" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, selected === 'visa' && styles.cardActive]}
          onPress={() => setSelected('visa')}
        >
          <Ionicons name="card" size={26} color="#181C2E" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Visa Platinum •••• 9014</Text>
            <Text style={styles.cardSub}>Мерзімі 08/28</Text>
          </View>
          <Ionicons name={selected === 'visa' ? 'radio-button-on' : 'radio-button-off'} size={22} color="#FF7622" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleAddCard}>
          <Text style={styles.btnPrimaryText}>+ ЖАҢА КАРТА ҚОСУ</Text>
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
  content: { padding: 20, gap: 14, flex: 1 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FA', padding: 16, borderRadius: 14, gap: 12 },
  cardActive: { backgroundColor: '#FFF5EC', borderWidth: 1, borderColor: '#FF7622' },
  kaspiBadge: { backgroundColor: '#F1462C', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8 },
  kaspiText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#181C2E' },
  cardSub: { fontSize: 12, color: '#777', marginTop: 2 },
  footer: { padding: 20 },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});