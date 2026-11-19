import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SupportScreen({ navigation }: { navigation?: any }) {
  const [message, setMessage] = useState('');

  const sendSupport = () => {
    if (!message.trim()) return;
    Alert.alert('Өтініш қабылданды', 'Қолдау қызметі жақын арада хабарласады.');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#181C2E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Қолдау қызметі</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Ionicons name="headset" size={32} color="#FF7622" />
          <Text style={styles.infoTitle}>Біз 24/7 байланыстамыз</Text>
          <Text style={styles.infoSub}>Тапсырыс немесе төлем бойынша сұрағыңыз болса, төменге жазыңыз.</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Сұрағыңызды жазыңыз..."
          placeholderTextColor="#888"
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={sendSupport}>
          <Text style={styles.btnPrimaryText}>ХАБАРЛАМА ЖІБЕРУ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#ECF0F4', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#181C2E' },
  content: { padding: 20, gap: 16 },
  infoBox: { backgroundColor: '#F8F9FA', padding: 20, borderRadius: 16, alignItems: 'center', gap: 6 },
  infoTitle: { fontSize: 16, fontWeight: 'bold', color: '#181C2E' },
  infoSub: { fontSize: 13, color: '#666', textAlign: 'center' },
  input: { backgroundColor: '#F0F5FA', borderRadius: 14, padding: 14, minHeight: 120, color: '#181C2E', textAlignVertical: 'top' },
  btnPrimary: { backgroundColor: '#FF7622', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  btnPrimaryText: { color: '#FFFFFF', fontSize: 15, fontWeight: '700' },
});