import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const FALLBACK_BANNER =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80';

function resolveImageSource(img: any): ImageSourcePropType {
  if (!img) {
    return { uri: FALLBACK_BANNER };
  }
  if (typeof img === 'string') {
    return { uri: img };
  }
  if (typeof img === 'object' && typeof img.uri === 'string') {
    return { uri: img.uri };
  }
  return img;
}

function getImageUriString(img: any, fallback = FALLBACK_BANNER): string {
  if (typeof img === 'string' && img.trim().length > 0) {
    return img;
  }
  if (img && typeof img === 'object' && typeof img.uri === 'string' && img.uri.trim().length > 0) {
    return img.uri;
  }
  return fallback;
}

const MENUS_BY_RESTAURANT: Record<string, Dish[]> = {
  'Додо Пицца': [
    {
      id: 'dodo-1',
      name: 'Пепперони Фреш',
      description: 'Ащы пепперони, моцарелла, қызанақ тұздығы',
      price: '2 890 ₸',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
    },
    {
      id: 'dodo-2',
      name: 'Маргарита',
      description: 'Моцарелла ірімшігі, қызанақ, орегано',
      price: '2 490 ₸',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    },
    {
      id: 'dodo-3',
      name: 'Сырлы Пицца',
      description: 'Төрт түрлі ірімшік қосылған классикалық пицца',
      price: '2 790 ₸',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
    },
  ],
  'Salam Bro': [
    {
      id: 'salam-1',
      name: 'Чизбургер Классик',
      description: 'Сиыр котлеті, чеддер ірімшігі, фирмалық тұздық',
      price: '1 650 ₸',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
    },
    {
      id: 'salam-2',
      name: 'Қос Бургер',
      description: 'Қос шырынды котлет, қызанақ, қытырлақ салат',
      price: '2 290 ₸',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    },
    {
      id: 'salam-3',
      name: 'Картоп Фри',
      description: 'Алтын түсті қытырлақ картоп',
      price: '790 ₸',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
    },
  ],
  'Doner Na Satpayeva': [
    {
      id: 'doner-1',
      name: 'Тауық Донер Лаваш',
      description: 'Жұқа лаваш, тауық еті, көкөніс, ақ-қызыл тұздық',
      price: '1 490 ₸',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
    },
    {
      id: 'doner-2',
      name: 'Сиыр Етінен Донер',
      description: 'Шырынды сиыр еті, балғын көкөністер, дәмдеуіштер',
      price: '1 790 ₸',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80',
    },
  ],
};

function getDishesForRestaurant(restaurantName: string): Dish[] {
  if (MENUS_BY_RESTAURANT[restaurantName]) {
    return MENUS_BY_RESTAURANT[restaurantName];
  }
  const lower = restaurantName.toLowerCase();
  if (lower.includes('salam') || lower.includes('бургер')) {
    return MENUS_BY_RESTAURANT['Salam Bro'];
  }
  if (lower.includes('doner') || lower.includes('донер') || lower.includes('satpayev')) {
    return MENUS_BY_RESTAURANT['Doner Na Satpayeva'];
  }
  return MENUS_BY_RESTAURANT['Додо Пицца'];
}

export default function RestaurantDetailScreen({
  route,
  navigation,
}: {
  route?: any;
  navigation?: any;
}) {
  const { addToCart, totalCount } = useCart();

  const restaurant = route?.params?.restaurant || {
    name: 'Додо Пицца',
    tags: 'Пицца • Фастфуд',
    rating: '4.7',
    time: '20 мин',
    image: FALLBACK_BANNER,
  };

  const restaurantName: string = String(restaurant?.name || 'Додо Пицца');
  const dishes = getDishesForRestaurant(restaurantName);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {restaurantName}
        </Text>
        <TouchableOpacity
          style={styles.circleBtn}
          onPress={() => navigation?.navigate('CartScreen')}
        >
          <Ionicons name="bag-handle-outline" size={20} color="#181C2E" />
          {totalCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{totalCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={resolveImageSource(restaurant?.image)}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.infoBox}>
          <Text style={styles.title}>{restaurantName}</Text>
          <Text style={styles.subtitle}>
            {restaurant?.tags || 'Мейрамхана мәзірі'} • ★ {restaurant?.rating || '4.8'} •{' '}
            {restaurant?.time || '20 мин'}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Мәзір</Text>

        {dishes.map((dish) => (
          <View key={dish.id} style={styles.dishCard}>
            <Image
              source={resolveImageSource(dish.image)}
              style={styles.dishImg}
              resizeMode="cover"
            />
            <View style={styles.dishInfo}>
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.dishDesc} numberOfLines={2}>
                {dish.description}
              </Text>
              <View style={styles.dishBottom}>
                <Text style={styles.dishPrice}>{dish.price}</Text>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() =>
                    addToCart({
                      id: dish.id,
                      name: dish.name,
                      restaurant: restaurantName,
                      price: dish.price,
                      image: getImageUriString(dish.image),
                    })
                  }
                >
                  <Text style={styles.addBtnText}>+ Себетке</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
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
  badgeText: { color: '#FFF', fontSize: 11, fontWeight: '700' },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#181C2E', maxWidth: '65%' },
  content: { paddingBottom: 28 },
  banner: { width: '100%', height: 180 },
  infoBox: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#F0F2F5' },
  title: { fontSize: 21, fontWeight: '800', color: '#181C2E', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#6B7280' },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#181C2E',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 10,
  },
  dishCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    overflow: 'hidden',
  },
  dishImg: { width: 96, height: 96 },
  dishInfo: { flex: 1, padding: 10, justifyContent: 'space-between' },
  dishName: { fontSize: 15, fontWeight: '700', color: '#181C2E' },
  dishDesc: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  dishBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  dishPrice: { fontSize: 14, fontWeight: '700', color: '#FF7622' },
  addBtn: {
    backgroundColor: '#FF7622',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  addBtnText: { color: '#FFFFFF', fontSize: 12, fontWeight: '700' },
});