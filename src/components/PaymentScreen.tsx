import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentScreen({ navigation }: any) {
  const [selectedMethod, setSelectedMethod] = useState('kaspi');
  const handleKaspiPayment = () => {
    Alert.alert(
      "Kaspi Pay",
      "Kaspi қосымшасына өту немесе QR арқылы төлеу сұранысы жіберілді.",
      [{ text: "Төленді", onPress: () => navigation.navigate('HomeScreen') }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Төлем жасау</Text>
        <View style={{ width: 20 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionLabel}>Төлем әдісін таңдаңыз</Text>

        <TouchableOpacity 
          style={[styles.payCard, selectedMethod === 'kaspi' && styles.payCardActive]}
          onPress={() => setSelectedMethod('kaspi')}
        >
          <View style={styles.row}>
            <View style={styles.kaspiLogoBg}>
              <Text style={styles.kaspiLogoText}>KASPI</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.payTitle}>Kaspi Pay / QR</Text>
              <Text style={styles.paySubtitle}>Kaspi Gold арқылы тез төлеу</Text>
            </View>
          </View>
          <Ionicons 
            name={selectedMethod === 'kaspi' ? "radio-button-on" : "radio-button-off"} 
            size={20} 
            color="#FF7622" 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.payCard, selectedMethod === 'card' && styles.payCardActive]}
          onPress={() => setSelectedMethod('card')}
        >
          <View style={styles.row}>
            <Ionicons name="card-outline" size={28} color="#333" style={{ marginRight: 12 }} />
            <View>
              <Text style={styles.payTitle}>Банк картасы</Text>
              <Text style={styles.paySubtitle}>Visa / Mastercard</Text>
            </View>
          </View>
          <Ionicons 
            name={selectedMethod === 'card' ? "radio-button-on" : "radio-button-off"} 
            size={20} 
            color="#FF7622" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton} onPress={handleKaspiPayment}>
          <Text style={styles.payButtonText}>Төлеу (4250 ₸)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  content: { padding: 20, flex: 1 },
  sectionLabel: { fontSize: 15, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  payCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#F8F9FA', 
    padding: 16, 
    borderRadius: 14, 
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee'
  },
  payCardActive: { borderColor: '#FF7622', backgroundColor: '#FFF5F0' },
  row: { flexDirection: 'row', alignItems: 'center' },
  kaspiLogoBg: { width: 40, height: 40, backgroundColor: '#F1462C', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  kaspiLogoText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  payTitle: { fontSize: 14, fontWeight: 'bold', color: '#181C2E' },
  paySubtitle: { fontSize: 12, color: '#777', marginTop: 2 },
  footer: { padding: 20, backgroundColor: '#fff' },
  payButton: { backgroundColor: '#FF7622', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  payButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
});