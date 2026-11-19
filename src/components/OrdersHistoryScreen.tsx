import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrdersHistoryScreen({ navigation }: { navigation?: any }) {
  const orders = [
    { id: '#FD-1042', restaurant: 'Додо Пицца', date: '18 қараша, 20:15', total: '4 250 ₸', status: 'Жеткізілді' },
    { id: '#FD-1029', restaurant: 'Salam Bro', date: '14 қараша, 13:40', total: '3 190 ₸', status: 'Жеткізілді' },
    { id: '#FD-1008', restaurant: 'Doner Na Satpayeva', date: '09 қараша, 19:05', total: '2 450 ₸', status: 'Жеткізілді' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Тапсырыс тарихы</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.topRow}>
              <Text style={styles.orderId}>{order.id}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
            </View>
            <Text style={styles.restaurantName}>{order.restaurant}</Text>
            <Text style={styles.dateText}>{order.date}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.totalText}>{order.total}</Text>
              <TouchableOpacity
                style={styles.trackBtn}
                onPress={() => navigation?.navigate('OrderTrackingScreen', { orderId: order.id })}
              >
                <Text style={styles.trackBtnText}>Күйін көру</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 20, gap: 14 },
  orderCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  orderId: { fontSize: 13, fontWeight: '700', color: '#A0A5BA' },
  statusBadge: { backgroundColor: '#E8F5E9', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  statusText: { fontSize: 12, fontWeight: '700', color: '#2E7D32' },
  restaurantName: { fontSize: 16, fontWeight: 'bold', color: '#181C2E', marginBottom: 4 },
  dateText: { fontSize: 12, color: '#777', marginBottom: 12 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#F0F5FA', paddingTop: 12 },
  totalText: { fontSize: 16, fontWeight: 'bold', color: '#FF7622' },
  trackBtn: { backgroundColor: '#F0F5FA', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  trackBtnText: { fontSize: 13, fontWeight: '600', color: '#181C2E' },
});