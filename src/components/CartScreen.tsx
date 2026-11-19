import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function CartScreen({ navigation }: { navigation?: any }) {
  const { items, totalPrice, increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.title}>Себет</Text>
        <View style={{ width: 40 }} />
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="bag-outline" size={48} color="#9CA3AF" />
          <Text style={styles.emptyText}>Себет әзірге бос</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.rest}>{item.restaurant}</Text>
                  <Text style={styles.price}>{item.priceText}</Text>
                </View>
                <View style={styles.qtyBox}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => decreaseQty(item.id)}
                  >
                    <Ionicons name="remove" size={16} color="#181C2E" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => increaseQty(item.id)}
                  >
                    <Ionicons name="add" size={16} color="#181C2E" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeItem(item.id)}
                    style={{ marginLeft: 4 }}
                  >
                    <Ionicons name="trash-outline" size={18} color="#EF4444" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Жалпы сома:</Text>
              <Text style={styles.totalValue}>
                {totalPrice.toLocaleString('ru-RU')} ₸
              </Text>
            </View>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation?.navigate('PaymentScreen')}
            >
              <Text style={styles.checkoutText}>Тапсырыс беру</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: '700', color: '#181C2E' },
  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  emptyText: { fontSize: 15, color: '#6B7280' },
  list: { paddingHorizontal: 16, paddingBottom: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    padding: 10,
    gap: 10,
  },
  img: { width: 64, height: 64, borderRadius: 10 },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: '700', color: '#181C2E' },
  rest: { fontSize: 12, color: '#6B7280' },
  price: { fontSize: 13, fontWeight: '700', color: '#FF7622', marginTop: 4 },
  qtyBox: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  qtyBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F3F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: { fontSize: 14, fontWeight: '700', color: '#181C2E', minWidth: 16, textAlign: 'center' },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
    backgroundColor: '#FFFFFF',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalLabel: { fontSize: 15, color: '#6B7280', fontWeight: '600' },
  totalValue: { fontSize: 18, fontWeight: '800', color: '#181C2E' },
  checkoutBtn: {
    backgroundColor: '#FF7622',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});