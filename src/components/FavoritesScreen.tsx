import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen({ navigation }: { navigation?: any }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Пепперони пиццасы',
      restaurant: 'Додо Пицца',
      price: '4 250 ₸',
      image: 'https://media.dodostatic.net/image/r:584x584/01995c2bbccc719094cc6fd0ead33551.webp',
    },
    {
      id: 2,
      name: 'Классикалық Донер',
      restaurant: 'Doner Na Satpayeva',
      price: '1 890 ₸',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9v8OvBHhxnj05O64tMbLbQ1XtzDQwbWMIEWd7wJyoA&s=10',
    },
  ]);

  const removeFavorite = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Таңдаулылар</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {items.length === 0 ? (
          <View style={styles.emptyBox}>
            <Ionicons name="heart-dislike-outline" size={48} color="#A0A5BA" />
            <Text style={styles.emptyText}>Таңдаулы тағамдар әзірге жоқ</Text>
          </View>
        ) : (
          items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => navigation?.navigate('RestaurantDetailScreen')}
            >
              <Image source={{ uri: item.image }} style={styles.thumb} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.sub}>{item.restaurant}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => removeFavorite(item.id)}>
                <Ionicons name="heart" size={22} color="#FF7622" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
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
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12 },
  thumb: { width: 64, height: 64, borderRadius: 12, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: 'bold', color: '#181C2E' },
  sub: { fontSize: 12, color: '#777', marginVertical: 2 },
  price: { fontSize: 14, fontWeight: '700', color: '#FF7622' },
  emptyBox: { alignItems: 'center', marginTop: 80, gap: 12 },
  emptyText: { fontSize: 15, color: '#777' },
});