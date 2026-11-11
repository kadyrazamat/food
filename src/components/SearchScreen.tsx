import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ navigation }: any) {
  const recentKeywords = ['Бургер', 'Доннер', 'Пицца'];
  const suggestedRestaurants = [
    { name: 'Dodo Pizza', rating: '4.7' },
    { name: 'Salam Bro', rating: '4.9' },
    { name: 'Doner Na Satpayeva', rating: '4.8' },
  ];

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
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Пицца"
            placeholderTextColor="#181C2E"
            style={styles.searchInput}
            autoFocus={true}
          />
          <TouchableOpacity style={styles.searchIconButton}>
            <Ionicons name="search" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Соңғы іздеулер</Text>
        </View>
        <View style={styles.keywordsContainer}>
          {recentKeywords.map((item, index) => (
            <View key={index} style={styles.keywordBadge}>
              <Text style={styles.keywordText}>{item}</Text>
              <TouchableOpacity>
                <Ionicons name="close" size={14} color="#A0A5BA" style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ұсынылатын мейрамханалар</Text>
        </View>

        {suggestedRestaurants.map((restaurant, index) => (
          <TouchableOpacity key={index} style={styles.restaurantItem}>
            <View style={styles.restaurantThumbnail} />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color="#FFA41B" />
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
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 10 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  scrollContent: { padding: 24 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FA', borderRadius: 10, paddingLeft: 16, height: 50, marginBottom: 24 },
  searchInput: { flex: 1, fontSize: 14, color: '#181C2E' },
  searchIconButton: { width: 50, height: 50, backgroundColor: '#FF7622', borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center' },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#181C2E' },
  keywordsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 24 },
  keywordBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F5FA', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginRight: 10, marginBottom: 10 },
  keywordText: { fontSize: 13, color: '#181C2E', marginRight: 6 },
  closeIcon: { marginLeft: 4 },
  restaurantItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  restaurantThumbnail: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#EAEAEA', marginRight: 16 },
  restaurantInfo: { flex: 1 },
  restaurantName: { fontSize: 15, fontWeight: '600', color: '#181C2E', marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { marginLeft: 4, fontSize: 13, color: '#181C2E', fontWeight: '500' },
});