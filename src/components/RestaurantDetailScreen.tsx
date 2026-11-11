import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RestaurantDetailScreen({ navigation }: any) {
  const [selectedSize, setSelectedSize] = useState('20см');
  const sizes = ['20см', '30см', '35см', '40см'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Толық мәлімет</Text>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={20} color="#181C2E" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.imagePlaceholder}>
          <View style={styles.imageInnerPlaceholder} />
        </View>

        <Text style={styles.restaurantLabel}>Додо Пицца</Text>
        <Text style={styles.foodTitle}>Пепперони </Text>
        <Text style={styles.foodDescription}>
          Пепперони — пицца жасауда жиі қолданылатын, ащы дәмі мен қанық қызыл түсі бар, ысталған және кептірілген дәстүрлі американдық шұжық түрі.
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.badge}>
            <Ionicons name="star" size={16} color="#FFA41B" />
            <Text style={styles.badgeText}>4.7</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="bicycle" size={16} color="#FF7622" />
            <Text style={styles.badgeText}>Тегін</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="time-outline" size={16} color="#181C2E" />
            <Text style={styles.badgeText}>20 мин</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Өлшемі:</Text>
          <View style={styles.sizesRow}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[styles.sizeBox, selectedSize === size && styles.sizeBoxActive]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextActive]}>
                  {size} 
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Құрамы</Text>
          <View style={styles.ingredientsRow}>
            {['🍅', '🧀', '🥩', '🌿'].map((item, index) => (
              <View key={index} style={styles.ingredientIconBox}>
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Бағасы</Text>
          <Text style={styles.priceValue}>4250тг</Text>
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 10 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  favoriteButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 24, paddingBottom: 100 },
  imagePlaceholder: { width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  imageInnerPlaceholder: { width: 160, height: 160, borderRadius: 80, backgroundColor: '#FFE1C6' },
  restaurantLabel: { fontSize: 13, color: '#A0A5BA', marginBottom: 4 },
  foodTitle: { fontSize: 22, fontWeight: 'bold', color: '#181C2E', marginBottom: 10 },
  foodDescription: { fontSize: 14, color: '#A0A5BA', lineHeight: 22, marginBottom: 20 },
  infoRow: { flexDirection: 'row', marginBottom: 24 },
  badge: { flexDirection: 'row', alignItems: 'center', marginRight: 24 },
  badgeText: { marginLeft: 6, fontSize: 14, fontWeight: '600', color: '#181C2E' },
  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#A0A5BA', marginBottom: 12 },
  sizesRow: { flexDirection: 'row' },
  sizeBox: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#F0F5FA', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  sizeBoxActive: { backgroundColor: '#FFE1C6' },
  sizeText: { fontSize: 14, fontWeight: '600', color: '#181C2E' },
  sizeTextActive: { color: '#FF7622' },
  ingredientsRow: { flexDirection: 'row' },
  ingredientIconBox: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#F0F5FA', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#F0F5FA', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  priceLabel: { fontSize: 12, color: '#A0A5BA' },
  priceValue: { fontSize: 20, fontWeight: 'bold', color: '#181C2E' },
  addToCartButton: { backgroundColor: '#FF7622', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 12 },
  addToCartText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
});