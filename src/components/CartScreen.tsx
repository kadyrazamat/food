import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen({ navigation }: any) {
  const cartItems = [
    { name: 'Пицца ', price:'4250тг', size: '20см', qty: 1},

  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Себет</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItemCard}>
            <View style={styles.itemThumbnail} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemSize}>Өлшемі: {item.size}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.qtyButton}>
                <Ionicons name="remove" size={16} color="#181C2E" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.qty}</Text>
              <TouchableOpacity style={styles.qtyButtonActive}>
                <Ionicons name="add" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Аралық сома</Text>
          <Text style={styles.summaryValue}>4250тг</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Жеткізу</Text>
          <Text style={styles.summaryValue}>Тегін</Text>
        </View>
        <View style={[styles.summaryRow, { marginBottom: 20 }]}>
          <Text style={styles.totalLabel}>Барлығы</Text>
          <Text style={styles.totalValue}>4250тг</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Тапсырыс беру</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 10 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 24 },
  cartItemCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FA', borderRadius: 16, padding: 12, marginBottom: 16 },
  itemThumbnail: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#EAEAEA', marginRight: 12 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 14, fontWeight: 'bold', color: '#181C2E', marginBottom: 4 },
  itemPrice: { fontSize: 14, fontWeight: '600', color: '#FF7622', marginBottom: 4 },
  itemSize: { fontSize: 12, color: '#A0A5BA' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' },
  qtyButtonActive: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FF7622', justifyContent: 'center', alignItems: 'center' },
  qtyText: { marginHorizontal: 10, fontSize: 14, fontWeight: 'bold', color: '#181C2E' },
  footer: { backgroundColor: '#F0F5FA', padding: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  summaryLabel: { fontSize: 14, color: '#A0A5BA' },
  summaryValue: { fontSize: 14, fontWeight: '600', color: '#181C2E' },
  totalLabel: { fontSize: 16, fontWeight: 'bold', color: '#181C2E' },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: '#FF7622' },
  checkoutButton: { backgroundColor: '#FF7622', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  checkoutButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
});