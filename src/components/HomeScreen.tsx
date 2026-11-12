import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: { navigation?: any }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = ['Барлығы', 'Донер', 'Бургер', 'Пицца', 'Сусын'];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.deliverLabel}>Жеткізу мекенжайы</Text>
          <TouchableOpacity style={styles.locationRow}>
            <Text style={styles.locationText}>Алғабас</Text>
            <Ionicons name="chevron-down" size={16} color="#FF6b00" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation?.navigate('CartScreen')}
        >
          <Feather name="shopping-bag" size={20} color="#333" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.greeting}>Сәлем, қайырлы күн!</Text>
        
        <TouchableOpacity 
          style={styles.searchContainer}
          onPress={() => navigation?.navigate('SearchScreen')}
          activeOpacity={0.8}
        >
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            placeholder="Тағамдар мен мейрамханаларды іздеу"
            placeholderTextColor="#999"
            style={styles.input}
            editable={false}
          />
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Барлық санаттар</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Барлығын көру {'>'}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
          {categories.map((cat, index) => {
            const isActive = selectedCategory === index;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.categoryCard, isActive && styles.categoryCardActive]}
                onPress={() => setSelectedCategory(index)}
              >
                <View style={[styles.categoryIconBg, isActive && styles.categoryIconBgActive]}>
                  <MaterialIcons
                    name={index === 0 ? 'local-fire-department' : 'fastfood'}
                    size={20}
                    color={isActive ? '#fff' : '#FF6b00'}
                  />
                </View>
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ашық мейрамханалар</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Барлығын көру {'>'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.restaurantCard}
          onPress={() => navigation?.navigate('RestaurantDetailScreen')}
          activeOpacity={0.9}
        >
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9v8OvBHhxnj05O64tMbLbQ1XtzDQwbWMIEWd7wJyoA&s=10' }}
            style={styles.restaurantImage}
          />
          <Text style={styles.restaurantName}>Додо Пицца</Text>
          <Text style={styles.restaurantTags}>Пицца • Фастфуд</Text>
          
          <View style={styles.restaurantMeta}>
            <View style={styles.metaItem}>
              <Ionicons name="star" size={14} color="#FFB800" />
              <Text style={styles.metaText}>4.7</Text>
            </View>
            <View style={styles.metaItem}>
              <MaterialIcons name="local-shipping" size={14} color="#FF6b00" />
              <Text style={styles.metaText}>Тегін</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={14} color="#666" />
              <Text style={styles.metaText}>20 мин</Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15 },
  deliverLabel: { fontSize: 10, color: '#FF6b00', fontWeight: 'bold', letterSpacing: 1 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  locationText: { fontSize: 14, fontWeight: '600', color: '#333', marginRight: 4 },
  cartButton: { width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  badge: { position: 'absolute', top: 6, right: 6, backgroundColor: '#FF6b00', width: 14, height: 14, borderRadius: 7, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: '#fff', fontSize: 8, fontWeight: 'bold' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 30 },
  greeting: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 15 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F2F6', borderRadius: 12, paddingHorizontal: 15, height: 48, marginBottom: 20 },
  searchIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 14, color: '#333' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  seeAll: { fontSize: 12, color: '#FF6b00' },
  categoriesRow: { marginBottom: 15, paddingVertical: 4 },
  categoryCard: { alignItems: 'center', marginRight: 12, backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 30, flexDirection: 'row', shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 4, elevation: 1 },
  categoryCardActive: { backgroundColor: '#FF6b00' },
  categoryIconBg: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#FFF3EC', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  categoryIconBgActive: { backgroundColor: 'rgba(255,255,255,0.2)' },
  categoryText: { fontSize: 13, fontWeight: '600', color: '#333' },
  categoryTextActive: { color: '#fff' },
  restaurantCard: { backgroundColor: '#fff', borderRadius: 16, padding: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 6, elevation: 2 },
  restaurantImage: { width: '100%', height: 140, borderRadius: 12, marginBottom: 10 },
  restaurantName: { fontSize: 15, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  restaurantTags: { fontSize: 12, color: '#777', marginBottom: 8 },
  restaurantMeta: { flexDirection: 'row', alignItems: 'center' },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  metaText: { fontSize: 12, color: '#555', marginLeft: 4, fontWeight: '500' },
});