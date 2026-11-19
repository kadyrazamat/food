// src/components/SearchScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  FALLBACK_RESTAURANTS,
  getRecommendedRestaurants,
  Restaurant,
} from '../api/foodService';

export default function SearchScreen({ navigation }: { navigation?: any }) {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(['Бургер', 'Доннер', 'Пицца']);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(FALLBACK_RESTAURANTS);
  const [loading, setLoading] = useState(false);

  const loadRestaurants = async (searchText: string) => {
    setLoading(true);
    try {
      const list = await getRecommendedRestaurants(searchText);
      setRestaurants(list);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurants('');
  }, []);

  const handleSearchSubmit = () => {
    const trimmed = query.trim();
    if (trimmed && !recentSearches.includes(trimmed)) {
      setRecentSearches((prev) => [trimmed, ...prev.slice(0, 4)]);
    }
    loadRestaurants(trimmed);
  };

  const handleTagPress = (tag: string) => {
    setQuery(tag);
    loadRestaurants(tag);
  };

  const removeSearchTag = (tag: string) => {
    setRecentSearches((prev) => prev.filter((item) => item !== tag));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Іздеу</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchRow}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearchSubmit}
              placeholder="Тағам немесе мейрамхана іздеу..."
              placeholderTextColor="#A0A5BA"
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchSubmit}>
            <Ionicons name="search" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Соңғы іздеулер</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="settings-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tagsRow}>
          {recentSearches.map((tag) => (
            <View key={tag} style={styles.tagChip}>
              <TouchableOpacity onPress={() => handleTagPress(tag)}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeSearchTag(tag)} style={styles.tagCloseBtn}>
                <Ionicons name="close" size={14} color="#6B7280" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Ұсынылатын мейрамханалар</Text>
          {loading && <ActivityIndicator size="small" color="#FF7622" />}
        </View>

        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantCard}
            activeOpacity={0.75}
            onPress={() =>
              navigation?.navigate('RestaurantDetailScreen', { restaurant })
            }
          >
            <Image
              source={restaurant.image}
              style={styles.restaurantAvatar}
              resizeMode="cover"
            />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={15} color="#FFB800" />
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 28 },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
    marginBottom: 20,
  },
  searchInputWrapper: {
    flex: 1,
    height: 50,
    backgroundColor: '#F6F7FB',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  searchInput: { fontSize: 15, color: '#181C2E' },
  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FF7622',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#181C2E' },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F8',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  tagText: { fontSize: 13, color: '#181C2E', fontWeight: '500' },
  tagCloseBtn: { padding: 2 },
  restaurantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  restaurantAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EAECEF',
    marginRight: 14,
  },
  restaurantInfo: { flex: 1 },
  restaurantName: { fontSize: 16, fontWeight: '600', color: '#181C2E', marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  ratingText: { fontSize: 14, fontWeight: '600', color: '#181C2E' },
});