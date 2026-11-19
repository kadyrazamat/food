import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderTrackingScreen({ navigation }: { navigation?: any }) {
  const steps = [
    { title: 'Тапсырыс қабылданды', time: '13:45', done: true },
    { title: 'Асханада дайындалуда', time: '13:50', done: true },
    { title: 'Курьер жолға шықты', time: '14:02', done: true },
    { title: 'Есігіңізге жеткізіледі', time: '~14:15', done: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Тапсырыс күйі</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.etaCard}>
          <Text style={styles.etaLabel}>Болжамды жеткізу уақыты</Text>
          <Text style={styles.etaTime}>15–20 мин</Text>
          <Text style={styles.courierText}>Курьер: Ерлан • Додо Пицца</Text>
        </View>

        <View style={styles.timeline}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={[styles.dot, step.done ? styles.dotActive : styles.dotPending]}>
                <Ionicons name={step.done ? 'checkmark' : 'time-outline'} size={14} color={step.done ? '#FFF' : '#888'} />
              </View>
              <View style={styles.stepInfo}>
                <Text style={[styles.stepTitle, !step.done && { color: '#888' }]}>{step.title}</Text>
                <Text style={styles.stepTime}>{step.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation?.navigate('HomeScreen')}>
          <Text style={styles.btnPrimaryText}>Басты бетке оралу</Text>
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
  content: { padding: 20, flex: 1 },
  etaCard: { backgroundColor: '#181C2E', borderRadius: 20, padding: 20, marginBottom: 24 },
  etaLabel: { color: '#A0A5BA', fontSize: 13, marginBottom: 6 },
  etaTime: { color: '#FF7622', fontSize: 28, fontWeight: '800', marginBottom: 6 },
  courierText: { color: '#FFFFFF', fontSize: 13 },
  timeline: { gap: 18 },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  dot: { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  dotActive: { backgroundColor: '#FF7622' },
  dotPending: { backgroundColor: '#F0F5FA' },
  stepInfo: { flex: 1 },
  stepTitle: { fontSize: 15, fontWeight: '700', color: '#181C2E' },
  stepTime: { fontSize: 12, color: '#888', marginTop: 2 },
  footer: { padding: 20 },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});