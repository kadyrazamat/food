import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function RestaurantDetailScreen({ navigation }: any) {
  const [currency, setCurrency] = useState('₸');
  const [selectedSize, setSelectedSize] = useState('20см');

  const basePrice = 4250;

  const formatPrice = (price: number) => {
    switch (currency) {
      case '$': return `$${(price / 450).toFixed(2)}`;
      case '€': return `€${(price / 490).toFixed(2)}`;
      default: return `${price}тг`;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Толық мәлімет</Text>
        
        <View style={styles.currencyContainer}>
          {['₸', '$', '€'].map((curr) => (
            <TouchableOpacity 
              key={curr} 
              style={[styles.currencyBtn, currency === curr && styles.currencyBtnActive]}
              onPress={() => setCurrency(curr)}
            >
              <Text style={[styles.currencyText, currency === curr && styles.currencyTextActive]}>{curr}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://media.dodostatic.net/image/r:584x584/01995c2bbccc719094cc6fd0ead33551.webp' }} 
            style={styles.foodImage} 
          />
        </View>

        <Text style={styles.restaurantLabel}>Додо Пицца</Text>
        <Text style={styles.foodName}>Пепперони</Text>
        
        <Text style={styles.foodDescription}>
          Пепперони — пицца жасауда жиі қолданылатын, ащы дәмі мен қанық қызыл түсі бар, ысталған және кептірілген дәстүрлі американдық шұжық түрі.
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={16} color="#FFB800" />
            <Text style={styles.metaText}>4.7</Text>
          </View>
          <View style={styles.metaItem}>
            <MaterialIcons name="local-shipping" size={16} color="#FF6b00" />
            <Text style={styles.metaText}>Тегін</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={16} color="#666" />
            <Text style={styles.metaText}>20 мин</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Өлшемі:</Text>
        <View style={styles.sizesRow}>
          {['20см', '25см', '30см'].map((size) => (
            <TouchableOpacity 
              key={size} 
              style={[styles.sizeCard, selectedSize === size && styles.sizeCardActive]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextActive]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Бағасы</Text>
          <Text style={styles.priceValue}>{formatPrice(basePrice)}</Text>
        </View>

        <TouchableOpacity 
          style={styles.addToCartButton} 
          onPress={() => navigation?.navigate('CartScreen')}
        >
          <Text style={styles.addToCartText}>Себетке қосу</Text>
        </TouchableOpacity>
      </View>
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
    paddingVertical: 10 
  },
  backButton: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#ECF0F4', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  
  /* Валюта стилі */
  currencyContainer: { flexDirection: 'row', backgroundColor: '#F0F5FA', borderRadius: 10, padding: 2 },
  currencyBtn: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  currencyBtnActive: { backgroundColor: '#FF7622' },
  currencyText: { fontSize: 12, fontWeight: 'bold', color: '#666' },
  currencyTextActive: { color: '#FFF' },

  scrollContent: { padding: 24 },
  
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  foodImage: { width: 180, height: 180, borderRadius: 90, resizeMode: 'cover', backgroundColor: '#EAEAEA' },

  restaurantLabel: { fontSize: 13, color: '#FF7622', fontWeight: '600', marginBottom: 4 },
  foodName: { fontSize: 22, fontWeight: 'bold', color: '#181C2E', marginBottom: 10 },
  foodDescription: { fontSize: 14, color: '#A0A5BA', lineHeight: 20, marginBottom: 20 },

  metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
  metaText: { fontSize: 14, color: '#333', marginLeft: 6, fontWeight: '600' },

  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#181C2E', marginBottom: 10 },
  sizesRow: { flexDirection: 'row', marginBottom: 20 },
  sizeCard: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10, backgroundColor: '#F0F5FA', marginRight: 10 },
  sizeCardActive: { backgroundColor: '#FF7622' },
  sizeText: { fontSize: 13, fontWeight: '600', color: '#666' },
  sizeTextActive: { color: '#FFF' },

  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#F0F5FA', 
    padding: 24, 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24 
  },
  priceLabel: { fontSize: 12, color: '#A0A5BA', marginBottom: 2 },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#181C2E' },
  addToCartButton: { 
    backgroundColor: '#FF7622', 
    paddingVertical: 14, 
    paddingHorizontal: 32, 
    borderRadius: 12, 
    alignItems: 'center' 
  },
  addToCartText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
});