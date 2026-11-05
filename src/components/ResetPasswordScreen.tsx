import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://unsplash.com' }} style={styles.img} />
      <View style={styles.body}>
        <Text style={styles.title}>Burger Bistro</Text>
        <Text style={styles.rating}>⭐️ 4.7  •  🕒 20 мин  •  Тегін жеткізу</Text>
        <Text style={styles.desc}>Жас еттен жасалған котлет пен фирмалық соусы бар ең дәмді классикалық бургер.</Text>
        <Text style={styles.price}>$32</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>СЕБЕТКЕ ҚОСУ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  img: { width: '100%', height: '45%' },
  body: { flex: 1, padding: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: '#FFFFFF', marginTop: -20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#32343E' },
  rating: { color: '#646982', marginVertical: 8 },
  desc: { fontSize: 15, color: '#646982', lineHeight: 22 },
  price: { fontSize: 26, fontWeight: 'bold', color: '#32343E', marginVertical: 20 },
  btn: { backgroundColor: '#FF7A00', padding: 16, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }
});
