// src/components/HomeScreen.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CategoryItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface MenuItem {
  id: string;
  name: string;
  restaurant: string;
  price: string;
  rating: string;
  category: string;
  image: string;
}

interface RestaurantCardItem {
  id: string;
  name: string;
  tags: string;
  rating: string;
  delivery: string;
  time: string;
  image: string;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'all', title: 'Барлығы', icon: 'flame' },
  { id: 'doner', title: 'Донер', icon: 'fast-food' },
  { id: 'burger', title: 'Бургер', icon: 'burger' as any },
  { id: 'pizza', title: 'Пицца', icon: 'pizza' },
  { id: 'drinks', title: 'Сусындар', icon: 'cafe' },
];

const RESTAURANTS: RestaurantCardItem[] = [
  {
    id: '1',
    name: 'Додо Пицца',
    tags: 'Пицца • Фастфуд',
    rating: '4.7',
    delivery: 'Тегін',
    time: '20 мин',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
  },
  {
    id: '2',
    name: 'Salam Bro',
    tags: 'Бургер • Картоп фри',
    rating: '4.9',
    delivery: '300 ₸',
    time: '25 мин',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  },
  {
    id: '3',
    name: 'Doner Na Satpayeva',
    tags: 'Донер • Шығыс тағамдары',
    rating: '4.8',
    delivery: 'Тегін',
    time: '15 мин',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80',
  },
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Пепперони Фреш',
    restaurant: 'Додо Пицца',
    price: '2 890 ₸',
    rating: '4.8',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
  },
  {
    id: 'm2',
    name: 'Чизбургер Классик',
    restaurant: 'Salam Bro',
    price: '1 650 ₸',
    rating: '4.9',
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
  },
  {
    id: 'm3',
    name: 'Тауық Донер Лаваш',
    restaurant: 'Doner Na Satpayeva',
    price: '1 490 ₸',
    rating: '4.7',
    category: 'doner',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
  },
  {
    id: 'm4',
    name: 'Айс Латте',
    restaurant: 'Додо Пицца',
    price: '1 150 ₸',
    rating: '4.6',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80',
  },
];

export default function HomeScreen({ navigation }: { navigation?: any }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [cartCount, setCartCount] = useState(1);

  const filteredMenu = MENU_ITEMS.filter((item) => {
    const matchCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchQuery =
      !searchText.trim() ||
      item.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
      item.restaurant.toLowerCase().includes(searchText.trim().toLowerCase());
    return matchCategory && matchQuery;
  });

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Жоғарғы мекенжай және себет қатары */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.addressBlock}
            onPress={() => navigation?.navigate('MapScreen')}
          >
            <Text style={styles.addressLabel}>Жеткізу мекенжайы</Text>
            <View style={styles.addressRow}>
              <Text style={styles.addressValue}>Алғабас</Text>
              <Ionicons name="chevron-down" size={16} color="#FF7622" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation?.navigate('CartScreen')}
          >
            <Ionicons name="bag-handle-outline" size={22} color="#181C2E" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Сәлемдесу */}
        <Text style={styles.greetingTitle}>Сәлем, қайырлы күн!</Text>

        {/* Іздеу жолағы */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#A0A5BA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Тағамдар мен мейрамханаларды іздеу"
            placeholderTextColor="#A0A5BA"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={18} color="#A0A5BA" />
            </TouchableOpacity>
          )}
        </View>

        {/* Қосымша жылдам мәзір батырмалары (Акция, Тарих, Промокод, Карта) */}
        <View style={styles.quickMenuRow}>
          <TouchableOpacity
            style={styles.quickMenuChip}
            onPress={() => navigation?.navigate('HurryOffersModal')}
          >
            <Ionicons name="flash-outline" size={16} color="#FF7622" />
            <Text style={styles.quickMenuText}>Акциялар</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickMenuChip}
            onPress={() => navigation?.navigate('OrdersHistoryScreen')}
          >
            <Ionicons name="receipt-outline" size={16} color="#FF7622" />
            <Text style={styles.quickMenuText}>Тапсырыстар</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickMenuChip}
            onPress={() => navigation?.navigate('PromoCodesScreen')}
          >
            <Ionicons name="pricetag-outline" size={16} color="#FF7622" />
            <Text style={styles.quickMenuText}>Промокод</Text>
          </TouchableOpacity>
        </View>

        {/* Барлық санаттар */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Барлық санаттар</Text>
          <TouchableOpacity onPress={() => navigation?.navigate('CategoriesScreen')}>
            <Text style={styles.seeAllText}>Барлығын көру &gt;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryChip, active && styles.categoryChipActive]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <View
                  style={[
                    styles.categoryIconCircle,
                    active && styles.categoryIconCircleActive,
                  ]}
                >
                  <Ionicons
                    name={cat.icon}
                    size={18}
                    color={active ? '#FF7622' : '#FF7622'}
                  />
                </View>
                <Text
                  style={[
                    styles.categoryText,
                    active && styles.categoryTextActive,
                  ]}
                >
                  {cat.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Ашық мейрамханалар */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ашық мейрамханалар</Text>
          <TouchableOpacity onPress={() => navigation?.navigate('SearchScreen')}>
            <Text style={styles.seeAllText}>Барлығын көру &gt;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.restaurantsList}
        >
          {RESTAURANTS.map((rest) => (
            <TouchableOpacity
              key={rest.id}
              style={styles.restaurantCard}
              activeOpacity={0.85}
              onPress={() =>
                navigation?.navigate('RestaurantDetailScreen', { restaurant: rest })
              }
            >
              <Image
                source={{ uri: rest.image }}
                style={styles.restaurantImage}
                resizeMode="cover"
              />
              <View style={styles.restaurantBody}>
                <Text style={styles.restaurantName}>{rest.name}</Text>
                <Text style={styles.restaurantTags}>{rest.tags}</Text>
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <Ionicons name="star" size={14} color="#FFB800" />
                    <Text style={styles.metaText}>{rest.rating}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="bicycle" size={15} color="#FF7622" />
                    <Text style={styles.metaText}>{rest.delivery}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="time-outline" size={14} color="#6B7280" />
                    <Text style={styles.metaText}>{rest.time}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Мәзір (Тағамдар тізімі) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Мәзір</Text>
          <Text style={styles.menuCountText}>{filteredMenu.length} тағам</Text>
        </View>

        <View style={styles.menuGrid}>
          {filteredMenu.map((dish) => (
            <View key={dish.id} style={styles.menuCard}>
              <Image
                source={{ uri: dish.image }}
                style={styles.menuImage}
                resizeMode="cover"
              />
              <View style={styles.menuContent}>
                <Text style={styles.menuName} numberOfLines={1}>
                  {dish.name}
                </Text>
                <Text style={styles.menuRestaurant} numberOfLines={1}>
                  {dish.restaurant}
                </Text>
                <View style={styles.menuFooter}>
                  <Text style={styles.menuPrice}>{dish.price}</Text>
                  <TouchableOpacity
                    style={styles.addBtn}
                    onPress={handleAddToCart}
                  >
                    <Ionicons name="add" size={18} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Төменгі навигация мәзірі */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#FF7622" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Басты</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation?.navigate('SearchScreen')}
        >
          <Ionicons name="search-outline" size={22} color="#6B7280" />
          <Text style={styles.navLabel}>Іздеу</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation?.navigate('OrdersHistoryScreen')}
        >
          <Ionicons name="receipt-outline" size={22} color="#6B7280" />
          <Text style={styles.navLabel}>Тапсырыс</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation?.navigate('ProfileScreen')}
        >
          <Ionicons name="person-outline" size={22} color="#6B7280" />
          <Text style={styles.navLabel}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
  },
  addressBlock: {
    justifyContent: 'center',
  },
  addressLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF7622',
    marginBottom: 2,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addressValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#181C2E',
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FF7622',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#181C2E',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7FB',
    borderRadius: 14,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 50,
    gap: 10,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#181C2E',
  },
  quickMenuRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 18,
  },
  quickMenuChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF5EE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  quickMenuText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#181C2E',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#181C2E',
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FF7622',
  },
  menuCountText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ECEEF2',
    borderRadius: 26,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 8,
    elevation: 1,
  },
  categoryChipActive: {
    backgroundColor: '#FF7622',
    borderColor: '#FF7622',
  },
  categoryIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFF3EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIconCircleActive: {
    backgroundColor: '#FFFFFF',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#181C2E',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  restaurantsList: {
    paddingHorizontal: 20,
    gap: 14,
    marginBottom: 22,
  },
  restaurantCard: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    overflow: 'hidden',
    elevation: 2,
  },
  restaurantImage: {
    width: '100%',
    height: 155,
  },
  restaurantBody: {
    padding: 14,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#181C2E',
    marginBottom: 4,
  },
  restaurantTags: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#181C2E',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    gap: 12,
  },
  menuCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    overflow: 'hidden',
  },
  menuImage: {
    width: '100%',
    height: 110,
  },
  menuContent: {
    padding: 10,
  },
  menuName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#181C2E',
    marginBottom: 2,
  },
  menuRestaurant: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  menuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF7622',
  },
  addBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF7622',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F2F5',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
    gap: 3,
  },
  navLabel: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#FF7622',
    fontWeight: '700',
  },
});