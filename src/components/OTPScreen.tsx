import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', name: 'Burger Bistro', price: '$40', img: 'https://unsplash.com' },
  { id: '2', name: 'Smokin Burger', price: '$60', img: 'https://unsplash.com' },
];

export default function OTPScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Танымал Бургерлер</Text>
      <FlatList 
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ResetPasswordScreen')}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20, paddingTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#32343E' },
  card: { backgroundColor: '#FAFAFA', width: '47%', padding: 12, borderRadius: 16, marginBottom: 15, alignItems: 'center' },
  img: { width: 100, height: 100, borderRadius: 12 },
  name: { fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#32343E' },
  price: { fontSize: 14, color: '#FF7A00', fontWeight: 'bold', marginTop: 4 }
});
