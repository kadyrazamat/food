import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CategoriesScreen({ navigation }: { navigation?: any }) {
  const categories = [
    { name: 'Пицца', count: '24 мейрамхана', icon: 'local-pizza' },
    { name: 'Бургер', count: '18 мейрамхана', icon: 'lunch-dining' },
    { name: 'Донер', count: '31 мейрамхана', icon: 'fastfood' },
    { name: 'Сусындар', count: '15 мейрамхана', icon: 'local-cafe' },
    { name: 'Десерт', count: '12 мейрамхана', icon: 'cake' },
    { name: 'Салаттар', count: '10 мейрамхана', icon: 'eco' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Барлық санаттар</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.name}
            style={styles.catCard}
            onPress={() => navigation?.navigate('SearchScreen')}
          >
            <View style={styles.iconBox}>
              <MaterialIcons name={cat.icon as any} size={28} color="#FF7622" />
            </View>
            <Text style={styles.catName}>{cat.name}</Text>
            <Text style={styles.catCount}>{cat.count}</Text>
          </TouchableOpacity>
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
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 20, gap: 14 },
  catCard: { width: '47%', backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, alignItems: 'center' },
  iconBox: { width: 54, height: 54, borderRadius: 27, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  catName: { fontSize: 15, fontWeight: 'bold', color: '#181C2E' },
  catCount: { fontSize: 12, color: '#777', marginTop: 4 },
});