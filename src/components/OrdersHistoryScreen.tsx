// src/components/OrdersHistoryScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FALLBACK_ORDERS, getOrdersHistory, Order } from '../api/foodService';

export default function OrdersHistoryScreen({ navigation }: { navigation?: any }) {
  const [orders, setOrders] = useState<Order[]>(FALLBACK_ORDERS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getOrdersHistory()
      .then((data) => {
        if (mounted) setOrders(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Тапсырыс тарихы</Text>
        <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
          {loading && <ActivityIndicator size="small" color="#FF7622" />}
        </View>
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

            <View style={styles.restaurantRow}>
              <Image
                source={order.image}
                style={styles.restaurantImage}
                resizeMode="cover"
              />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{order.restaurant}</Text>
                <Text style={styles.dateText}>{order.date}</Text>
              </View>
            </View>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 20, gap: 14 },
  orderCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: { fontSize: 13, fontWeight: '700', color: '#A0A5BA' },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: { fontSize: 12, fontWeight: '700', color: '#2E7D32' },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  restaurantImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F0F5FA',
    marginRight: 12,
  },
  restaurantInfo: { flex: 1 },
  restaurantName: { fontSize: 16, fontWeight: 'bold', color: '#181C2E', marginBottom: 2 },
  dateText: { fontSize: 12, color: '#777' },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F5FA',
    paddingTop: 12,
  },
  totalText: { fontSize: 16, fontWeight: 'bold', color: '#FF7622' },
  trackBtn: {
    backgroundColor: '#F0F5FA',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  trackBtnText: { fontSize: 13, fontWeight: '600', color: '#181C2E' },
});