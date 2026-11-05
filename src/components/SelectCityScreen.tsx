import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';

export default function SelectCityScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loc}>Алматы қаласы, Абай даңғылы 📍</Text>
      </View>
      <Text style={styles.welcome}>Сәлем, дәмді тағам таңдаңыз!</Text>
      
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('OTPScreen')}>
        <Image source={{ uri: 'https://unsplash.com' }} style={styles.cardImg} />
        <Text style={styles.cardTitle}>Rose Garden Restaurant</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.mTitle}>Hurry Offers! 🔥</Text>
            <Text style={styles.mCode}>#1243CD2</Text>
            <Text style={styles.mDesc}>Кодты енгізіп 25% жеңілдік алыңыз!</Text>
            <TouchableOpacity style={styles.mBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.mBtnText}>ҚАБЫЛ АЛУ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20, paddingTop: 40 },
  header: { marginBottom: 20 },
  loc: { fontSize: 16, fontWeight: 'bold', color: '#32343E' },
  welcome: { fontSize: 20, color: '#32343E', marginBottom: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, overflow: 'hidden', marginBottom: 20 },
  cardImg: { width: '100%', height: 150 },
  cardTitle: { padding: 15, fontSize: 16, fontWeight: 'bold' },
  modalBg: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalBox: { backgroundColor: '#FF7A00', padding: 30, borderRadius: 20, width: '80%', alignItems: 'center' },
  mTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  mCode: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginVertical: 15, borderWidth: 1, borderColor: '#FFF', padding: 8, borderStyle: 'dashed' },
  mDesc: { color: '#FFFFFF', textAlign: 'center', marginBottom: 20 },
  mBtn: { backgroundColor: '#FFFFFF', paddingHorizontal: 30, paddingVertical: 12, borderRadius: 10 },
  mBtnText: { color: '#FF7A00', fontWeight: 'bold' }
});
